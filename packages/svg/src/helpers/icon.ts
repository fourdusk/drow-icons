import { cleanupSVG, importDirectory, isEmptyColor, parseColors, runSVGO } from '@iconify/tools'
import { consola } from 'consola'

export const iconsDir = 'src/svg'

export const getOptimizeIconSet = async () => {
  // Import icons
  const iconSet = await importDirectory(iconsDir)

  // Validate, clean up, fix palette and optimise
  iconSet.forEach((name, type) => {
    if (type !== 'icon') {
      return false
    }

    const svg = iconSet.toSVG(name)
    if (!svg) {
      // Invalid icon
      iconSet.remove(name)
      return false
    }

    // Clean up and optimise icons
    try {
      // Cleanup icon code
      cleanupSVG(svg)

      /*
       * Assume icon is monotone: replace color with currentColor, add if missing
       * If icon is not monotone, remove this code
       */
      parseColors(svg, {
        defaultColor: 'currentColor',
        callback: (_, colorStr, color) =>
          !color || isEmptyColor(color) ? colorStr : 'currentColor'
      })

      // Optimise
      runSVGO(svg)
    } catch (err) {
      // Invalid icon
      iconSet.remove(name)
      consola.error(err)
      return false
    }

    // Update icon
    iconSet.fromSVG(name, svg)
  })

  return iconSet
}
