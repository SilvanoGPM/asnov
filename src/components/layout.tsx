import * as React from 'react';

import { GlobalStyle } from '../styles/global';
import { Footer } from './footer';

import { Header } from './header';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <GlobalStyle />

      <Header />

      {children}

      <Footer />
    </>
  );
}
