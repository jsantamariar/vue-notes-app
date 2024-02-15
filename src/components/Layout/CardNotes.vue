<template>
  <div
    class="relative max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-2xl shadow-slate-700 dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="flex">
      <!-- Card Title -->
      <div>
        <RouterLink :to="'/notes/' + note.id">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {{ note.title }}
          </h5>
        </RouterLink>
      </div>
      <!-- Card Menu -->
      <CardMenu :note="note" v-model="options.isCardMenuOpen" @onDelete="handleDeleteNote" />
    </div>
    <p
      class="mb-3 font-normal text-gray-700 dark:text-gray-400"
      v-html="getShortText(note.description)"
    ></p>
  </div>
  <!-- Delete Modal -->
  <ModalDelete
    v-if="options.isModalVisible"
    v-model="options.isModalVisible"
    @onConfirm="handleDeleteNote"
  />
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useNotesStore } from '@/store/notes'
import { getShortText } from '@/utils/main'
import ModalDelete from '@/components/Layout/ModalDelete.vue'
import { reactive } from 'vue'
import CardMenu from './CardMenu.vue'

const { deleteNote } = useNotesStore()

const { note } = defineProps<{
  note: {
    id: string
    title: string
    description: string
  }
}>()

const options = reactive({
  isCardMenuOpen: false,
  isModalVisible: false
})

const handleDeleteNote = () => {
  deleteNote(note.id)
}
</script>
