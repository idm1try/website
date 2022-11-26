import { useEffect, useState } from 'react';
import { IoMoon, IoSunny } from 'react-icons/io5';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme');
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  const toggleTheme = () => {
    const t = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', t);
    document.documentElement.style.setProperty('color-scheme', t);
    setTheme(t);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
    }
  }, [theme]);

  return (
    <div>
      <button
        className='dark:text-subtext-100 rounded-lg p-2.5 text-subtext0-200 transition-all duration-300 hover:bg-surface0-200 active:bg-surface1-200 dark:hover:bg-surface0-100 dark:active:bg-surface1-100'
        onClick={toggleTheme}
        aria-label='Toggle theme'
      >
        {theme === 'light' ? <IoSunny /> : <IoMoon />}
      </button>
    </div>
  );
};

export default ThemeToggle;
