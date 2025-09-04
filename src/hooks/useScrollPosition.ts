'use client';

import { useEffect, useRef, useState } from 'react';

export type ScrollPosition = {
  scrollY: number;
  isAtTop: boolean;
  direction: 'up' | 'down' | 'none';
};

/**
 * useScrollPosition
 * - Returns current window scrollY, whether we're at top, and scroll direction.
 * - Uses requestAnimationFrame for performant updates.
 */
export function useScrollPosition(threshold: number = 4): ScrollPosition {
  const [scrollY, setScrollY] = useState<number>(0);
  const [direction, setDirection] = useState<'up' | 'down' | 'none'>('none');
  const lastYRef = useRef<number>(0);
  const tickingRef = useRef<boolean>(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const onScroll = () => {
      const currentY = window.scrollY || window.pageYOffset || 0;
      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          const delta = currentY - lastYRef.current;
          if (Math.abs(delta) >= threshold) {
            setDirection(delta > 0 ? 'down' : 'up');
            lastYRef.current = currentY;
          }
          setScrollY(currentY);
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };

    // Initialize on mount
    lastYRef.current = window.scrollY || 0;
    setScrollY(lastYRef.current);

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return {
    scrollY,
    isAtTop: scrollY <= threshold,
    direction,
  };
}

export default useScrollPosition;
