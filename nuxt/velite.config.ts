import { defineConfig, s } from "velite";

export default defineConfig({
  root: "content",

  output: {
    data: ".velite",
  },

  collections: {
    posts: {
      name: "Post",
      pattern: "posts/**/*.md",

      schema: s.object({
        title: s.string(),
        date: s.isodate(),
        description: s.string().optional(),
        body: s.markdown(),
        slug: s.slug('posts')
      }),
    },
  },
});