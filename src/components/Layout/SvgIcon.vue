<template>
  <component :is="flagComponent" :width="width" :height="height" />
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'

const props = defineProps({
  name: String,
  width: [Number, String],
  height: [Number, String]
})

const flagComponent = computed(() => {
  return defineAsyncComponent(() => import(`@/components/icons/${props.name}.vue`))
})
</script>
