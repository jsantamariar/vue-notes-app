<template>
  <NavBar />
  <RouterView />
</template>

<script setup lang="ts">
import NavBar from '@/components/Layout/NavBar.vue'
</script>

<style scoped>
.app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  background-color: #28282b;
  padding: 20px;
}

a {
  text-decoration: none;
  font-size: 22px;
  color: white;
  background-color: transparent;
  letter-spacing: 2px;
}

span.separator {
  color: white;
  cursor: default;
  font-size: 25px;
}
</style>
