<template>
  <div>Edit Note View</div>

  <ClassicTextEditor v-model:title="title" v-model:description="description" />
</template>

<script setup lang="ts">
import ClassicTextEditor from '@/components/Editors/Classic/ClassicTextEditor.vue'
import { ref } from 'vue'

const title = ref('')
const description = ref('')
</script>
