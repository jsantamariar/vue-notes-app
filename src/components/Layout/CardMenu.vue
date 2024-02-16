<template>
  <div class="absolute right-0 top-2">
    <button
      id="dropdownMenuIconButton"
      data-dropdown-toggle="dropdownDots"
      class="inline-flex items-start py-1 text-sm font-medium text-center text-gray-900 bg-white rounded-lg dark:text-white dark:bg-gray-800"
      type="button"
      @click="emit('update:isCardMenuOpen', !isCardMenuOpen)"
    >
      <svg
        class="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 4 15"
      >
        <path
          d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        />
      </svg>
    </button>
  </div>

  <!-- Dropdown menu -->
  <div
    id="dropdownDots"
    v-if="isCardMenuOpen"
    class="z-10 absolute shadow-lg border border-stone-500 border-opacity-15 shadow-stone-500 right-2 top-11 bg-white divide-y divide-gray-100 rounded-lg w-44 dark:bg-gray-700 dark:divide-gray-600"
  >
    <ul
      class="py-2 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="dropdownMenuIconButton"
    >
      <li>
        <RouterLink
          :to="'/editNote/' + note?.id"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >Update</RouterLink
        >
      </li>
      <li>
        <a
          @click="handleDelete"
          class="block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Delete
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  isCardMenuOpen: {
    type: Boolean,
    default: false
  },
  note: {
    type: Object
  }
})

const handleDelete = () => {
  emit('update:isCardMenuOpen', false)
  emit('onDelete')
}

const emit = defineEmits(['update:isCardMenuOpen', 'onDelete'])
</script>
