import { useState, useEffect } from 'react';

const isClient = typeof window === "object";

export const GetScrollPosition = () => {
  const [scrollTop, setScrollTop] = useState(0);

  function getScroll() {
    return isClient
      ? window.pageYOffset || document.documentElement.scrollTop
      : undefined;
  }

  function handleScroll() {
    setScrollTop(getScroll())
  }

  useEffect(() => {
    if (!isClient) {
      return false;
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return scrollTop || 0;
}