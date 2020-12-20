import { readFileSync, unlinkSync } from 'fs'
import { resolve } from 'path'
import { getResultSamostoyatelen } from './samostoyatelen/getResult'
const TEMP_FILE = 'TEMP_SAMOSTOYATELEN.txt'

export async function notary(sourceFilePath: string): Promise<void> {
  try {
    const cwd = resolve(__dirname, `../files`)
    const tempFilePath = `${cwd}/${TEMP_FILE}`

    const convertedText = readFileSync(tempFilePath, 'utf8')
    // if (convertedText.length < 100) {
    //   throw new Error('convertedText.length < 100')
    // }
    // const result = getResultSamostoyatelen(convertedText)
    // let a
  } catch (err) {
    console.log({err})
  }
}

const testPath = resolve(__dirname, '../files/samostoyatelen_example.pdf')
// const testPath = resolve(__dirname, '../assets/samostoyatelenObekt.pdf')

notary(testPath)