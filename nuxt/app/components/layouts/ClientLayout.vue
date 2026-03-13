<template>
  <div>
    <!-- ヘッダー -->
    <div class="flex items-center justify-between bg-gray-100">
      <div class="space-x-3 px-7 py-8">
        <span class="text-xl pr-5">SPA Test</span>
        <NuxtLink to="/" class="text-gray-500 underline">Top</NuxtLink>
        <NuxtLink to="/posts/1" class="text-gray-500 underline">Blog</NuxtLink>
      </div>
      <div class="space-x-3 px-7 py-8">
        <LoadingLine v-if="auth.loading.value" />
        <template v-else>
          <NuxtLink
            v-if="auth.user.value"
            to="/profile"
            class="text-gray-500 underline"
          >
            ユーザーページ
          </NuxtLink>
          <span>{{ auth.user.value ? auth.user.value.name : 'Guest' }}</span>
        </template>
      </div>
    </div>

    <!-- コンテンツ -->
    <div class="container mx-auto my-10">
      <div
        v-if="authError"
        class="text-center my-20 border rounded-2xl p-20 bg-blue-50 shadow-lg text-gray-500"
      >
        このページへのアクセス権がありません。
      </div>
      <slot v-else />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAuth } from '@/composables/useAuth'
import LoadingLine from '@/components/ui/LoadingLine.vue'
import { useRouter } from 'vue-router'

// props
interface Props {
  needAuth?: boolean
  auth: ReturnType<typeof useAuth>
}

const props = defineProps<Props>()

const needAuth = props.needAuth ?? false

console.log('needAuth', needAuth)

// 認証エラー判定
const authError = computed(() => needAuth && !props.auth.loading.value && !props.auth.user.value)
</script>