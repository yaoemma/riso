import { useState, useEffect, useCallback } from 'react';

export function useCarousel(totalItems, intervalMs = 5000) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const showItem = useCallback((index) => {
    if (totalItems === 0) return;
    setCurrentIndex(((index % totalItems) + totalItems) % totalItems);
  }, [totalItems]);

  const next = useCallback(() => {
    showItem(currentIndex + 1);
  }, [currentIndex, showItem]);

  const prev = useCallback(() => {
    showItem(currentIndex - 1);
  }, [currentIndex, showItem]);

  useEffect(() => {
    if (totalItems <= 1 || paused) return;
    const id = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % totalItems);
    }, intervalMs);
    return () => clearInterval(id);
  }, [totalItems, paused, intervalMs]);

  return {
    currentIndex,
    showItem,
    next,
    prev,
    pause: () => setPaused(true),
    resume: () => setPaused(false),
  };
}
