<template>
  <div class="my-5">
    <label for="post_title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >Post Title</label
    >
    <input
      type="text"
      id="post_title"
      class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
      placeholder="Enter post title"
      v-model="postTitle"
      required
    />
  </div>
  <ckeditor
    v-model="editorData"
    tag-name="textarea"
    :editor="editor"
    :config="editorConfig"
    @ready="onReady"
    @input="onInput"
  />
  <div class="flex justify-end gap-2">
    <button
      class="bg-slate-800 text-white font-bold rounded text-sm p-2 hover:bg-slate-700"
      @click="handleAddNote"
    >
      Add Note
    </button>
    <button
      class="bg-stone-400 text-white font-bold rounded text-sm p-2 border-slate-500 border-1 hover:bg-stone-300"
      @click="handleAddNote"
    >
      Cancel
    </button>
  </div>

  {{ editorData }}

  <!-- <div class="wrapper" v-html="editorData" /> -->
  <!-- <div class="wrapper" editorData>{{ editorData }}</div> -->
</template>

<script setup lang="ts">
import { ref } from 'vue'
import editorConfig from './config'
import { useClassicEditor } from './useClassicEditor'
import { useNotesStore } from '@/store/notes'
import { v4 as uuidv4 } from 'uuid'

const { addNewNote } = useNotesStore()
const { editor, editorData, onReady, onInput } = useClassicEditor()

const postTitle = ref('')

const handleAddNote = () => {
  const newNote = {
    id: uuidv4(),
    title: postTitle.value,
    description: editorData.value
  }
  console.log({ newNote })
  addNewNote(newNote)
}
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
  border-width: 2px !important;
}

.wrapper h2 {
  @apply list-disc list-inside text-2xl;
}
</style>
