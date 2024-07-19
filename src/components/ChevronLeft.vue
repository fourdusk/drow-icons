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
    <path fill="currentColor" d="m15.914 17.5-5.5-5.5 5.5-5.5L14.5 5.086 7.586 12l6.914 6.914z" />
  </svg>
</template>

<script setup lang="ts">
defineOptions({
  name: 'ChevronLeft'
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
