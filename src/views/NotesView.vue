<template>
  <div class="text-center mt-10">
    <h1 class="text-4xl my-2 cursor-default text-stone-700 font-bold dark:text-white">Notes</h1>
    <div class="inline-flex mx-3 m-5" v-for="note in notes" :key="note.id">
      <CardNotes :data="note" />
    </div>
    <div v-if="notes.length < 1">There are not notes yet</div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useNotesStore } from '@/store/notes'
import CardNotes from '@/components/Layout/CardNotes.vue'

const notesStore = useNotesStore()
const { notes } = storeToRefs(notesStore)
</script>

<style scoped></style>
