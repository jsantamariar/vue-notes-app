<template>
  <component :is="FlagIcon" :width="width" :height="height" />
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'

const { name, width, height } = defineProps({
  name: String,
  width: [Number, String],
  height: [Number, String]
})

const FlagIcon = computed(() => {
  return defineAsyncComponent(() => import(`@/components/Icons/${name}.vue`))
})
</script>
