interface FrontmatterHeading {
  level: string | number;
  text: string;
  id: string;
}

interface TableOfContentProps {
  headings: FrontmatterHeading[];
}

const TableOfContent = ({ headings }: TableOfContentProps) => (
  <nav
    aria-labelledby='toc-title'
    className={
      headings.length > 1
        ? 'fixed top-24 right-0 hidden max-h-96 w-[27ch] flex-shrink-0 animate-fade_in self-start overflow-y-auto overscroll-contain p-8 2xl:block'
        : 'hidden'
    }
  >
    <p
      className='text-sm font-bold uppercase tracking-wide text-subtext1-200 dark:text-subtext1-100'
      id='toc-title'
    >
      On this page
    </p>
    <ul className='mt-4 space-y-2'>
      {headings.map(({ id, text, level }) => (
        <li key={id} title={text} className={level === 'h3' ? 'ml-4' : undefined}>
          <a
            href={`#${id}`}
            className='w-[20ch] text-surface2-200 transition-colors duration-300 line-clamp-1 hover:text-flamingo-200 dark:text-surface2-100 dark:hover:text-flamingo-100'
          >
            {text}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default TableOfContent;
