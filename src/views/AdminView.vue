<template>
  <div>
    <h1 class="text-lg text-stone-700 dark:text-white font-bold text-center my-5">Create Post</h1>
  </div>
  <div class="w-full flex justify-center">
    <div class="w-4/5">
      <ClassicTextEditor />
    </div>
  </div>
</template>

<script setup lang="ts">
import ClassicTextEditor from '@/components/Editors/Classic/ClassicTextEditor.vue'
</script>

<style scoped></style>
