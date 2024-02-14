<template>
  <div class="my-5">
    <label for="post_title" class="block mb-2 text-xlfont-medium text-gray-900 dark:text-white">{{
      $route.name === 'EditNote' ? 'Edit Note' : 'Post Title'
    }}</label>
    <!-- Editor Title -->
    <slot name="title" />
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
  <!-- <slot name="description" /> -->
  <ckeditor
    v-model="editorData"
    tag-name="textarea"
    :editor="editor"
    :config="editorConfig"
    @ready="onReady"
    @input="onInput"
  />
  <!-- Editor footer -->
  <div class="flex justify-end gap-2">
    <button
      :disabled="!postTitle || !editorData"
      :class="{ 'bg-stone-300 hover:bg-stone-300 cursor-not-allowed': !postTitle || !editorData }"
      class="bg-slate-800 text-white font-bold rounded-xl text-sm p-2 hover:opacity-80"
      @click="handleAddNote"
    >
      Add Note
    </button>
    <button
      class="bg-stone-400 text-white font-bold rounded-xl text-sm p-2 border-slate-500 border-1 hover:opacity-80"
      @click="onCancel"
    >
      Cancel
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import editorConfig from './config'
import { useClassicEditor } from './useClassicEditor'
import { useNotesStore } from '@/store/notes'
import { v4 as uuidv4 } from 'uuid'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const { addNewNote, getNoteContentById } = useNotesStore()
const { editor, editorData, onReady, onInput } = useClassicEditor()

const postData = getNoteContentById(route.params.id as string)

const props = defineProps({
  title: String,
  description: String
})

const emit = defineEmits(['update:title', 'update:description'])

const updateTitle = (title: string) => {
  emit('update:title', title)
}

// Similar para lastName
const updateDescription = (description: string) => {
  emit('update:description', description)
}

const postTitle = ref(postData?.title || '')

const handleAddNote = () => {
  const newNote = {
    id: uuidv4(),
    title: postTitle.value,
    description: editorData.value
  }

  addNewNote(newNote)
  router.push({ name: 'Notes' })
}

const onCancel = () => {
  editorData.value = ''
  postTitle.value = ''
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
