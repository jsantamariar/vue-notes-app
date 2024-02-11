<template>
  <svg
    class="rounded-full"
    :height="height"
    :width="width"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 130 120"
    enable-background="new 0 0 130 120"
    xml:space="preserve"
  >
    <g id="Infos">
      <rect id="BG" x="-950" y="-740" fill="#D8D8D8" width="2180" height="1700" />
    </g>
    <g id="Others"></g>
    <g id="Europe">
      <g id="Row_5"></g>
      <g id="Row_4"></g>
      <g id="Row_3"></g>
      <g id="Row_2">
        <g>
          <rect fill="#1E1D1D" width="130" height="39" />
          <rect y="39" fill="#DC4437" width="130" height="42" />
          <rect y="81" fill="#FCBE1F" width="130" height="39" />
        </g>
      </g>
      <g id="Row_1"></g>
    </g>
  </svg>
</template>

<script setup lang="ts">
const { width, height } = defineProps<{
  width: number | string
  height: number | string
}>()
</script>
