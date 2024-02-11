<template>
  <div class="text-center mt-10">
    <h1 class="text-4xl my-2 cursor-default text-stone-700 font-bold dark:text-white">Notes</h1>
    <div class="inline-flex mx-3 m-5" v-for="item in mockData" :key="item.id">
      <CardNotes :data="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import CardNotes from '@/components/Layout/CardNotes.vue'
import { mockData } from '@/utils/mockData'
</script>

<style scoped></style>
