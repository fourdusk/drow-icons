import { accessSync, constants, readdirSync, rmdirSync, statSync, unlinkSync } from 'node:fs'

/**
 * Pascal to kebab
 * @param {string} str
 * @returns {string}
 */
export const pascalToKebab = (str?: string) => {
  if (typeof str !== 'string') {
    return ''
  }
  return str.replace(/[A-Z]/gu, (match, offset) => (offset > 0 ? '-' : '') + match.toLowerCase())
}

/**
 * Kebab to pascal
 * @param {string} str
 * @returns {string}
 */
export const kebabToPascal = (str?: string) => {
  if (typeof str !== 'string') {
    return ''
  }
  return str.replace(/(?<first>^.)|(?<rest>-.)/gu, x => (x.length > 1 ? x[1] : x[0]).toUpperCase())
}

/**
 * Determines whether the file exists
 * @param {string} path
 * @returns {boolean}
 */
export const fileIsExist = (path: string) => {
  try {
    accessSync(path, constants.F_OK)
  } catch {
    return false
  }
  return true
}

/**
 * Remove dir and files
 * @param {string} dir
 */
export const removeFiles = (dir: string) => {
  if (fileIsExist(dir)) {
    const files = readdirSync(dir)
    for (const file of files) {
      const path = `${dir}/${file}`
      const isFile = statSync(path).isFile()
      if (isFile) {
        unlinkSync(path)
      } else {
        removeFiles(path)
      }
    }
    rmdirSync(dir)
  }
}
