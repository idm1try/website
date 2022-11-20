import useSearchParams from '@/hooks/useSearchParams';
import search from '@/lib/matchSorter';
import { useMemo } from 'react';
import Post from '@/types/post';

export function getPostTags(data: any) {
  const values = data.flatMap((blog: Post) => blog.tags);
  return Array.from(new Set(values.filter((values: string) => values)));
}

export default function usePostSearch(posts: any) {
  const { setParams, searchString, addFilter, removeFilter, filters } = useSearchParams();

  const results = useMemo(() => {
    return search(posts, ['title', 'description', 'tags', 'host'], searchString);
  }, [searchString, posts]);

  const resultsByTags = useMemo(() => {
    if (filters.length === 0) return results;
    return results.filter((result: any) =>
      result.tags?.some((cat: string) => filters.includes(cat))
    );
  }, [results, filters]);

  return {
    isEmptyResult: results.length === 0,
    results: resultsByTags,
    setParams,
    addTag: addFilter,
    removeTag: removeFilter,
    defaultValue: searchString || '',
    tags: getPostTags(results),
    allTags: getPostTags(posts),
    filters,
    hasFilter: filters.length > 0,
    hasQuery: searchString !== '',
  };
}
