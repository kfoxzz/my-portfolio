'use client';

import { useState, useEffect } from 'react';

export default function useWindowResolution() {
  const [width, setWidth] = useState(0);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    setWidth(window.innerWidth);

    window.addEventListener('resize', handleWindowSizeChange);

    return () => window.removeEventListener('resize', handleWindowSizeChange);
  }, []);

  const isMobileWidth = width <= 768;

  return { isMobileWidth };
}
