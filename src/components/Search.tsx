interface SearchProps {
  className?: string;
  defaultValue?: string;
  onChange?(value: string): void;
}

const Search = ({ onChange, defaultValue, className }: SearchProps) => {
  return (
    <div>
      <input
        defaultValue={defaultValue}
        placeholder='Search'
        aria-label='Search'
        onChange={event => {
          onChange(event.target.value);
        }}
        type='text'
        className={`w-full rounded-lg bg-mantle-200 py-2 px-4 outline-none ring-mauve-200 ring-offset-4 ring-offset-base-200 transition-all duration-300 placeholder:text-surface2-200 hover:ring-2 focus:ring-2 dark:bg-mantle-100 dark:ring-mauve-100 dark:ring-offset-base-100 dark:placeholder:text-surface2-100 ${className}`}
      />
    </div>
  );
};

export default Search;
