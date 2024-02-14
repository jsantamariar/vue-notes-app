<template>
  <ckeditor
    v-model="editorData"
    tag-name="textarea"
    :editor="editor"
    :config="editorConfig"
    @ready="onReady"
    @input="onInput"
  />

  <h2>Live editor data</h2>
  <br />

  <div class="wrapper" v-html="editorData" />
  <!-- <div class="wrapper" editorData>{{ editorData }}</div> -->
</template>

<script setup lang="ts">
import editorConfig from './config'
import { useClassicEditor } from './useClassicEditor'

const { editor, editorData, onReady, onInput } = useClassicEditor()
</script>

<style>
textarea {
  width: 100%;
  height: 100px;
  font-family: monospace;
}
button {
  margin-top: 10px;
}

.ck-editor__editable {
  min-height: 20vh;
}

.ck-editor__editable_inline {
  border-color: #cbced1 !important;
  border-bottom-left-radius: 15px !important;
  border-bottom-right-radius: 15px !important;
}

.wrapper h2 {
  @apply list-disc list-inside text-2xl;
}
</style>
