import { useEffect } from 'react';

export function useWindowEvent(
  type: string,
  listener: () => void,
  options?: boolean | AddEventListenerOptions
) {
  useEffect(() => {
    window.addEventListener(type, listener, options);
    return () => window.removeEventListener(type, listener, options);
  });
}
