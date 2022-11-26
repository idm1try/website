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
          className='fixed bottom-8 right-8 animate-fade_in_up rounded-lg bg-pink-200 p-3 font-bold text-base-200 transition-colors duration-300 hover:bg-flamingo-200 active:bg-rosewater-200 dark:bg-pink-100 dark:text-base-100 dark:hover:bg-flamingo-100 dark:active:bg-rosewater-100'
        >
          <IoArrowUp />
        </button>
      )}
    </div>
  );
};

export default GoToTopButton;
