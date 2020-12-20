import { readFileSync, unlinkSync } from 'fs'
import { resolve } from 'path'
import { defaultTo } from 'rambdax'
import { exec } from 'helpers-fn'
import { getResult } from './modules/getResult'
import { getText } from './modules/getText'
import { getResultSamostoyatelen } from './samostoyatelen/getResult'

const TEMP_FILE = 'TEMP.txt'

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

async function notary(
  sourceFilePath: string,
  modeRaw?: Mode,
): Promise<void> {
  try {
    const mode = defaultTo('POZEMLEN', modeRaw)
    const cwd = resolve(__dirname, `../files`)
    const tempFilePath = `${cwd}/${TEMP_FILE}`

    const convertCommand = `pdftotext ${sourceFilePath} -raw ${tempFilePath}`
    console.log({convertCommand})
    await exec({
      command: convertCommand,
      cwd: cwd,
    })

    const convertedText = readFileSync(tempFilePath, 'utf8')
    // unlinkSync(tempFilePath)

    // if (convertedText.length < 100) {
    //   throw new Error('convertedText.length < 100')
    // }

    // return methods[mode](convertedText)
  } catch (err) {
    console.log({err})
  }
}

const PATH = resolve(__dirname, '../files/samostoyatelen_example.pdf')

notary(PATH).then(console.log)
// notary('/home/just/repos/notary/files/pozemlenSecond.pdf').then(console.log)

// notary('/home/just/repos/notary/files/samostoyatelenObekt.pdf', 'SAMOSTOYATELEN').then(console.log)
