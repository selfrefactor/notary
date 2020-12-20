import { defaultTo } from 'rambdax'
import { getResult } from './modules/getResult'
import { getText } from './modules/getText'
import { getResultSamostoyatelen } from './samostoyatelen/getResult'

const methods: Methods = {
  SAMOSTOYATELEN: samostoyatelen,
  POZEMLEN: pozemlen,
}

function pozemlen(convertedText: string): string {
  const result = getResult(convertedText)
  const text = getText(result)

  return text
}

function samostoyatelen(convertedText: string): string {

  return getResultSamostoyatelen(convertedText)
}

export async function notary(
  textInput: string,
  mode?: Mode,
): Promise<string> {
  const modeInput = defaultTo('POZEMLEN', mode)

  if (textInput.length < 100) return ''

  return methods[modeInput](textInput)
}
