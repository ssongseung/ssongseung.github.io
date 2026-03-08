import { useState, useEffect } from "react";

/**
 * Tailwind breakpoint 기준 감지 훅
 * 기본값: md (768px 이상)
 */
export const useBreakpoint = (breakpoint = 768) => {
  const [isMatch, setIsMatch] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${breakpoint}px)`);

    // 초기값 설정
    setIsMatch(mediaQuery.matches);

    // 리사이즈 대응
    const handler = (e) => setIsMatch(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => {
      mediaQuery.removeEventListener("change", handler);
    };
  }, [breakpoint]);

  return isMatch;
};