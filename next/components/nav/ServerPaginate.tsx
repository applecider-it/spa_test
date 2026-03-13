import Link from 'next/link';

import { getPageInfo } from '@/services/nav/paginate';

export default function ServerPaginate({
  page,
  info,
}: {
  page: number;
  info: ReturnType<typeof getPageInfo>;
}) {
  const pageClass =
    'px-4 py-2 rounded-xl border border-gray-200 hover:bg-gray-100 transition';

  return (
    <nav className="flex justify-center items-center gap-3 mt-16">
      {page > 1 && (
        <Link href={`/posts/${page - 1}`} prefetch={false} className={pageClass}>
          ← Prev
        </Link>
      )}

      {page < info.pageCount && (
        <Link href={`/posts/${page + 1}`} prefetch={false} className={pageClass}>
          Next →
        </Link>
      )}
    </nav>
  );
}
