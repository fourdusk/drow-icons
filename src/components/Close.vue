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
    <path
      fill="currentColor"
      d="m7.05 5.636 4.95 4.95 4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.415 1.414-4.95-4.95-4.949 4.95-1.414-1.414 4.95-4.95-4.95-4.95z"
    />
  </svg>
</template>

<script setup lang="ts">
defineOptions({
  name: 'Close'
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
