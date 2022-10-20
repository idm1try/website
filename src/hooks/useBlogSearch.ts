import { allBlogs } from 'contentlayer/generated';
import { useMemo } from 'react';
import search from 'lib/matchSorter';
import useSearchParams from 'hooks/useSearchParams';

export function getBlogTags(data = allBlogs) {
  const values = data.flatMap(blog => blog.tags);
  return Array.from(new Set(values.filter(values => values)));
}

export default function useBlogSearch() {
  const { setParams, searchString, addFilter, removeFilter, filters } = useSearchParams();

  const results = useMemo(() => {
    return search(allBlogs, ['title', 'description', 'tags', 'host'], searchString);
  }, [searchString]);

  const resultsByTags = useMemo(() => {
    if (filters.length === 0) return results;
    return results.filter(result => result.tags?.some(cat => filters.includes(cat)));
  }, [results, filters]);

  return {
    isEmptyResult: results.length === 0,
    results: resultsByTags,
    setParams,
    addTag: addFilter,
    removeTag: removeFilter,
    defaultValue: searchString || '',
    tags: getBlogTags(results),
    allTags: getBlogTags(),
    filters,
    hasFilter: filters.length > 0,
    hasQuery: searchString !== '',
  };
}
