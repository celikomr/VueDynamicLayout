<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const layout = computed(() => {
  return route.meta.layout || 'div'
})
</script>

<template>
  <component :is="layout || 'div'">
    <router-view />
  </component>
</template>