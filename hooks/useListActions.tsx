import { useState } from 'react';

const useListActions = (list: any[], index?: number) => {
  const [currentIndex, setCurrentIndex] = useState(index ?? 0);

  const next = () => {
    setCurrentIndex((prev) => {
      if (prev >= list.length) {
        return prev;
      }
      return prev + 1;
    });
  };

  const back = () => {
    setCurrentIndex((prev) => {
      if (prev <= 0) {
        return prev;
      }
      return prev - 1;
    });
  };
  const isFirst = (): boolean => currentIndex === 0;
  const isLast = (): boolean => currentIndex === list.length - 1;

  return {
    currentIndex,
    next,
    back,
    isFirst,
    isLast,
  };
};

export default useListActions;
