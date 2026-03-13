import ServerLayout from '@/components/layouts/ServerLayout';

import { posts } from '@/.velite';

export default function Posts() {
  console.log('Posts');

  return (
    <ServerLayout>
      <div>
        <h2 className="app-h2">Blog</h2>

        <div>
          {posts.map((post) => (
            <article key={post.slug}>
              <h3>{post.title}</h3>
              <div
                className="app-post-content-container"
                dangerouslySetInnerHTML={{ __html: post.body }}
              />
            </article>
          ))}
        </div>
      </div>
    </ServerLayout>
  );
}
