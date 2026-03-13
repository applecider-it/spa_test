/** ページ情報を生成 */
export function getPageInfo<T>(items: T[], page: number, perPage: number) {
  const pageCount = Math.ceil(items.length / perPage);

  const idx = page - 1;
  const list = items.slice(idx * perPage, (idx + 1) * perPage);

  return { pageCount, list };
}