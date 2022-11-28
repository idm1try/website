import useSearchParams from '@/hooks/useSearchParams';
import search from '@/lib/matchSorter';
import Post from '@/types/post';
import { Project } from '@/types/projects';
import { useMemo } from 'react';

export function getTags(data: Post[] | Project[]) {
  const values = data.flatMap(value => value.tags);
  return Array.from(new Set(values.filter(values => values)));
}

export default function useSearch(items: Post[] | Project[]) {
  const { setParams, searchString, addFilter, removeFilter, filters } = useSearchParams();

  const results = useMemo(() => {
    return search(items, ['title', 'name', 'desc', 'excerpt', 'tags'], searchString);
  }, [searchString, items]);

  const resultsByTags = useMemo(() => {
    if (filters.length === 0) return results;
    return results.filter(result => result.tags?.some((cat: string) => filters.includes(cat)));
  }, [results, filters]);

  return {
    isEmptyResult: results.length === 0,
    results: resultsByTags,
    setParams,
    addTag: addFilter,
    removeTag: removeFilter,
    defaultValue: searchString || '',
    tags: getTags(results),
    allTags: getTags(items),
    filters,
    hasFilter: filters.length > 0,
    hasQuery: searchString !== '',
  };
}
