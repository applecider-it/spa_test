import { posts, type Post } from './.velite';
import { POST_PER_PAGE } from './app/config/const'

import { getPageInfo } from './app/services/nav/paginate';

const info = getPageInfo<Post>(posts, 1, POST_PER_PAGE);

const routes = [];

for (const post of posts) {
  routes.push(`/article/${post.slug}`);
}

for (let i = 0; i < info.pageCount; i++) {
  routes.push(`/posts/${i + 1}`);
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  nitro: {
    prerender: {
      routes: routes,
    },
  },
  modules: ['@nuxtjs/tailwindcss'],
});
