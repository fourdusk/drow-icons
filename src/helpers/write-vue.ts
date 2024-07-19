import { writeFile } from 'fs/promises'

import { kebabToPascal } from '.'
import { getOptimizeIconSet } from './icon'
const iconSet = await getOptimizeIconSet()

const saveDir = 'src/components'
let exportStr = ''

await iconSet.forEach(async name => {
  const svg = iconSet.toString(name)
  if (!svg) {
    return false
  }

  const compName = kebabToPascal(name)

  const sfcStr = `
    <template>
      ${svg.replace('<svg ', `<svg :style="iconStyle" @click="handleClick" `)}
    </template>

    <script setup lang="ts">
    defineOptions({
      name: '${compName}'
    })

    const emit = defineEmits<{
      click: [e: MouseEvent]
    }>()

    const handleClick = (e: MouseEvent) => {
      emit('click', e)
    }

    const iconStyle = {
      width: '1em',
      height: '1em'
    }

    </script>
    `

  exportStr += `
  export { default as ${compName} } from '../components/${name}.vue'
  `
  // Save to file
  await writeFile(`${saveDir}/${compName}.vue`, sfcStr, 'utf8')
})

await writeFile(`src/index.ts`, exportStr, 'utf8')
