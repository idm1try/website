import { useWindowScroll } from '@/hooks/useWindowScroll';
import { IoArrowUp } from 'react-icons/io5';

const GoToTopButton = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <div>
      {scroll.y >= 100 && (
        <button
          aria-label='Scroll to top'
          onClick={() => scrollTo({ y: 0 })}
          className='fixed bottom-8 right-8 animate-fade_in_up rounded-lg bg-mantle-200 p-3 font-bold text-pink-200 transition-colors duration-300 hover:bg-surface0-200 active:bg-surface1-200 dark:bg-mantle-100 dark:text-pink-100 dark:hover:bg-surface0-100 dark:active:bg-surface1-100'
        >
          <IoArrowUp />
        </button>
      )}
    </div>
  );
};

export default GoToTopButton;
