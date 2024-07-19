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
    <path fill="currentColor" d="m17.5 8.086-5.5 5.5-5.5-5.5L5.086 9.5 12 16.414 18.914 9.5z" />
  </svg>
</template>

<script setup lang="ts">
defineOptions({
  name: 'ChevronDown'
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
