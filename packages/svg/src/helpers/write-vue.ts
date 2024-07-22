import {
  accessSync,
  constants,
  mkdirSync,
  readdirSync,
  rmdirSync,
  statSync,
  unlinkSync,
  writeFileSync
} from 'node:fs'

import { getOptimizeIconSet } from './icon'
import { kebabToPascal } from './index'
const iconSet = await getOptimizeIconSet()

const saveDir = 'src/components'
let exportStr = ''

const fileIsExist = (path: string) => {
  try {
    accessSync(path, constants.F_OK)
  } catch {
    return false
  }
  return true
}

const removeDirAndFile = (dir: string) => {
  if (fileIsExist(dir)) {
    const files = readdirSync(dir)
    for (const file of files) {
      const path = `${dir}/${file}`
      const isFile = statSync(path).isFile()
      if (isFile) {
        unlinkSync(path)
      } else {
        removeDirAndFile(path)
      }
    }
    rmdirSync(dir)
  }
}

removeDirAndFile(saveDir)
mkdirSync(saveDir)

iconSet.forEach(name => {
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
  export { default as ${compName} } from './components/${compName}.vue'
  `
  // Save to file
  writeFileSync(`${saveDir}/${compName}.vue`, sfcStr, 'utf8')
})

writeFileSync(`src/main.ts`, exportStr, 'utf8')
