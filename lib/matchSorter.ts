/* TODO: fix it */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { matchSorter, MatchSorterOptions } from 'match-sorter';

export default function search<T extends Record<string, any>>(
  items: T[],
  keys: string[],
  searchString: string
) {
  const searches = new Set(searchString.split(' '));

  const options: MatchSorterOptions = {
    keys: keys.map(key => ({ key, threshold: matchSorter.rankings.CONTAINS })),
  };

  const wordOptions: MatchSorterOptions = {
    keys: options.keys.map((key: any) => {
      return {
        ...key,
        maxRanking: matchSorter.rankings.CASE_SENSITIVE_EQUAL,
        threshold: matchSorter.rankings.WORD_STARTS_WITH,
      };
    }),
  };

  const allResults = matchSorter(items, searchString, options);

  if (searches.size < 2) {
    return allResults as T[];
  }

  const [firstWord, ...restWords] = Array.from(searches.values());

  const wordResults = matchSorter(items, firstWord, wordOptions);

  for (const word of restWords) {
    const searchResult = matchSorter(items, word, wordOptions);
    wordResults.push(...searchResult);
  }

  const results = [...allResults, ...wordResults].filter(
    (item, index, self) => index === self.findIndex(t => (t as any).title === (item as any).title)
  );

  return results as T[];
}
