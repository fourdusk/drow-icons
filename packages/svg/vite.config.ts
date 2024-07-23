import { resolve } from 'node:path'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

import { removeFiles } from './src/helpers/index'

const pathResolve = (dir: string) => resolve(process.cwd(), '.', dir)

const config = defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    dts({
      rollupTypes: true,
      beforeWriteFile(filePath, content) {
        const removeEmitGlobalTypesRegexp =
          /^[^\n]*__VLS_globalTypesStart[\w\W]*__VLS_globalTypesEnd[^\n]*\n?$/gmu
        const replaceContent = content.replace(removeEmitGlobalTypesRegexp, '')
        return {
          filePath,
          content: replaceContent
        }
      },
      afterBuild() {
        removeFiles('dist/src')
      }
    })
  ],
  build: {
    lib: {
      entry: pathResolve('src/main.ts'),
      fileName: 'main',
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['vue']
    }
  }
})

export default config
