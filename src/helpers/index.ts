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
