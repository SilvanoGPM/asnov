import * as React from 'react';

import { GlobalStyle } from '../../styles/global';

import { Header } from '../header';

import * as S from './styles';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <GlobalStyle />

      <Header />

      <S.Container>
        {children}
      </S.Container>
    </>
  );
}
