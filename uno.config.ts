import {
  defineConfig,
  presetAttributify,
  presetUno,
  transformerAttributifyJsx,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

const config = defineConfig({
  presets: [presetUno(), presetAttributify()],
  transformers: [transformerVariantGroup(), transformerDirectives(), transformerAttributifyJsx()]
})
export default config
