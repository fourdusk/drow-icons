<template>
  <div>
    <ViChevronLeft />
    <ViChevronRight />
  </div>
  <h1>{{ msg }}</h1>
</template>

<script setup lang="ts">
defineOptions({
  name: 'HelloWorld'
})
defineProps<{ msg: string }>()
</script>
