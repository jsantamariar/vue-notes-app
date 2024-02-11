<template>
  <ckeditor
    :editor="ClassicEditor"
    v-model="editorData"
    :config="editorConfig"
    @ready="onReady"
    @change="onChange"
  ></ckeditor>
  <p class="text-stone-700" v-html="editorData" />
</template>

<script setup lang="ts">
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { editorConfig } from '@/components/Editors/Classic/config'
import { useClassicEditor } from '@/components/Editors/Classic/useClassicEditor'

const { editorData, onReady, onChange } = useClassicEditor()
</script>
