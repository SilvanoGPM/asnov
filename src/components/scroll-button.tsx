import * as React from 'react';

import { scrollToElement } from '../utils/scroll-to-element';

interface ScrollButtonProps {
  children: React.ReactNode;
  dataScroll: string;
  className?: string;
  beforeScroll?: () => void;
}

export function ScrollButton({
  children,
  dataScroll,
  className,
  beforeScroll,
}: ScrollButtonProps) {
  function handleScrollTo() {
    beforeScroll?.();
    scrollToElement(dataScroll);
  }

  return (
    <button onClick={handleScrollTo} className={className}>
      {children}
    </button>
  );
}
