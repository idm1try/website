interface SearchPostsProps {
  className?: string;
  defaultValue?: string;
  onChange?(value: string): void;
}

const SearchPosts = ({ onChange, defaultValue, className }: SearchPostsProps) => {
  return (
    <div>
      <input
        defaultValue={defaultValue}
        placeholder='Search posts'
        aria-label='search-posts'
        onChange={event => {
          onChange(event.target.value);
        }}
        type='text'
        className={`w-full rounded-lg bg-mantle-200 py-2 px-4 outline-none ring-mauve-200 transition-all duration-300 placeholder:text-surface2-200 hover:bg-mantle-200/60 focus:bg-mantle-200/60 focus:ring-2 dark:bg-mantle-100 dark:ring-mauve-100 dark:placeholder:text-surface2-100 dark:hover:bg-mantle-100/80 dark:focus:bg-mantle-100/60 ${className}`}
      />
    </div>
  );
};

export default SearchPosts;