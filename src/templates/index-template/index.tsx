import * as React from 'react';

import { Header } from '../../components/header';
import { Layout } from '../../components/layout';

import { WhichIs } from './which-is';

import * as S from './styles';

export function IndexTemplate() {
  return (
    <Layout>
      <Header />

      <S.Container>
        <WhichIs />
      </S.Container>
    </Layout>
  );
}
