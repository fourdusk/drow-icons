<template>
  <div class="box">
    <div v-for="comp in compList" :key="comp.name" class="box-item">
      <div>
        <component :is="comp" />
      </div>
      <div>{{ pascalToKebab(comp.name) }}</div>
    </div>
    <div class="box-item">
      <div>
        <DiSun />
      </div>
      <div>sun</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as compList from '@drow-icons/svg'

import { pascalToKebab } from './helpers'
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
