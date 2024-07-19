<template>
  <svg
    :style="iconStyle"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    @click="handleClick"
  >
    <path fill="currentColor" d="m8.086 17.5 5.5-5.5-5.5-5.5L9.5 5.086 16.414 12 9.5 18.914z" />
  </svg>
</template>

<script setup lang="ts">
defineOptions({
  name: 'ChevronRight'
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
