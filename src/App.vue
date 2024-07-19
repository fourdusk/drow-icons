<template>
  <div class="box">
    <div v-for="comp in compList" :key="comp.name" class="box-item">
      <div>
        <component :is="comp" />
      </div>
      <div>{{ pascalToKebab(comp.name) }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue'

import { pascalToKebab } from '@/helpers'
const modules = import.meta.glob('./components/*.vue', { eager: true, import: 'default' })
const compList: Component[] = []

for (const [, mod] of Object.entries(modules)) {
  compList.push(mod as Component)
}
</script>

<style lang="scss" scoped>
.box {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 4px;

  &-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;

    &:hover {
      background: rgba(0 0 0 / 0.05);
    }
  }
}
</style>
@/helpers
