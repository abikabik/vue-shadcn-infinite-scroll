<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

const observer = ref()
const observerRef = ref(null)

const { intersectionObserverOptions } = defineProps(['intersectionObserverOptions'])


const emit = defineEmits(['onIntersection'])

onMounted(() => {
  observer.value = new IntersectionObserver((entries) => {
    entries[0].isIntersecting && emit('onIntersection')
  }, intersectionObserverOptions)

  observer.value.observe(observerRef.value)
})

onBeforeUnmount(() => {
  observer.value.disconnect()
})
</script>

<template>
  <div
    ref="observerRef"
    class="observer"
  >
    <slot name="loader" />
  </div>
</template>

<style scoped>

</style>
