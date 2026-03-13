<script setup>
const route = useRoute()
const slug = route.params.slug
</script>

<template>
  <div>
    <h1>Blog {{ slug }}</h1>
  </div>
</template>