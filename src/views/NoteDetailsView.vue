<template>
  <div class="text-center mt-32">
    <div class="flex justify-center flex-col mx-3 m-5 text-stone-700">
      <div>
        {{ noteContent?.title }}
      </div>
      {{ noteContent?.created }}
      <div></div>
      <div>
        {{ noteContent?.createdBy }}
      </div>
      <div v-html="noteContent?.description"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNotesStore } from '@/store/notes'
import { useRoute } from 'vue-router'

const { getNoteContentById } = useNotesStore()

const { params } = useRoute()
const noteContent = getNoteContentById(params.id as string)
</script>
