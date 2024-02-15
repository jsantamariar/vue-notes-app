<template>
  <div class="text-center mt-10">
    <h1 class="text-4xl my-2 cursor-default text-stone-700 font-bold dark:text-white">Notes</h1>
    <div class="inline-flex mx-3 m-5" v-for="note in notes" :key="note.id">
      <CardNotes :note="note" />
    </div>
    <div v-if="notes.length < 1">There are not notes yet</div>
    <LoadingSpinner v-if="isLoading" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useNotesStore } from '@/store/notes'
import { storeToRefs } from 'pinia'
import CardNotes from '@/components/Layout/CardNotes.vue'
import LoadingSpinner from '@/components/Layout/LoadingSpinner.vue'

const { getAllNotes, ...store } = useNotesStore()
const { notes, isLoading } = storeToRefs(store)

onMounted(() => {
  getAllNotes()
})

onUnmounted(() => {
  store.$reset()
})
</script>

<style scoped></style>
