<template>
  <div class="my-5">
    <label for="post_title" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">{{
      $route.name === 'EditNote' ? 'Edit Title' : 'Post Title'
    }}</label>
    <!-- Editor Title -->
    <input
      type="text"
      id="post_title"
      class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
      placeholder="Enter post title"
      v-model="postTitle"
      required
    />
  </div>
  <!-- Editor Description -->
  <label class="text-xl font-medium mb-2 block text-gray-900 dark:text-white"
    >Edit description</label
  >
  <ckeditor
    v-model="postDescription"
    tag-name="textarea"
    :editor="editor"
    :config="editorConfig"
    @ready="onReady"
    @input="onInput"
  />
  <!-- Editor Actions -->
  <div class="flex justify-end gap-2 mt-2">
    <button
      :disabled="!postTitle || !postDescription"
      :class="{
        'bg-stone-300 hover:opacity-100 cursor-not-allowed': !postTitle || !postDescription
      }"
      class="bg-stone-400 text-white font-bold rounded-xl text-sm p-2 border-slate-500 border-1 hover:opacity-80"
      @click="onCancel"
    >
      Cancel
    </button>
    <button
      :disabled="!postTitle || !postDescription"
      :class="{
        'bg-stone-300 hover:bg-stone-300  hover:opacity-100 cursor-not-allowed':
          !postTitle || !postDescription
      }"
      class="bg-slate-800 text-white font-bold rounded-xl text-sm p-2 hover:opacity-80"
      @click="$route.name === 'EditNote' ? handleUpdateNote() : handleAddNote()"
    >
      Add Note
    </button>
  </div>
</template>

<script setup lang="ts">
import editorConfig from './config'
import { useClassicEditor } from './useClassicEditor'

const {
  editor,
  postTitle,
  postDescription,
  onReady,
  onInput,
  onCancel,
  handleAddNote,
  handleUpdateNote
} = useClassicEditor()
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
