import { resolve } from 'node:path'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import unoCSS from 'unocss/vite'
import { FileSystemIconLoader as iconLoader } from 'unplugin-icons/loaders'
import iconsResolver from 'unplugin-icons/resolver'
import icons from 'unplugin-icons/vite'
import components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

const pathResolve = (dir: string) => resolve(process.cwd(), '.', dir)

const config = defineConfig({
  resolve: {
    alias: {
      '@': pathResolve('src')
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    unoCSS(),
    icons({
      autoInstall: false,
      scale: 1,
      compiler: 'vue3',
      defaultClass: '',
      defaultStyle: '',
      customCollections: {
        di: iconLoader(pathResolve('src/svg'))
      }
    }),
    components({
      dirs: ['src/components'],
      dts: 'src/types/components.d.ts',
      resolvers: [
        iconsResolver({
          prefix: false,
          customCollections: ['di']
        })
      ]
    })
  ]
})

export default config
