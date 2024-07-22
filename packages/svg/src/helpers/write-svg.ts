import { writeFile } from 'fs/promises'

import { getOptimizeIconSet, iconsDir } from './icon'
const iconSet = await getOptimizeIconSet()

iconSet.forEach(async name => {
  const svg = iconSet.toString(name)
  if (!svg) {
    return false
  }

  // Save to file
  await writeFile(`${iconsDir}/${name}.svg`, svg, 'utf8')
})
