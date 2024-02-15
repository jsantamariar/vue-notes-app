<template>
  <div class="text-center mt-32">
    <div class="inline-flex mx-3 m-5 text-stone-700">
      {{ params.id }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const { params } = useRoute()
console.log(params.id)
</script>
