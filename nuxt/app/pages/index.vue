<template>
  <ClientLayout :auth="auth">
    <h2 class="app-h2">Home</h2>

    <div class="mt-10">
      <NuxtLink to="/development" class="app-link-normal">
        開発者向けページ
      </NuxtLink>
    </div>
  </ClientLayout>
</template>

<script setup lang="ts">
import ClientLayout from '@/components/layouts/ClientLayout.vue';
import { useAuth } from '@/composables/useAuth';

const auth = useAuth();

console.log('Home', auth);
</script>
