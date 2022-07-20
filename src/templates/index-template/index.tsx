import * as React from 'react';

import { Header } from '../../components/header';
import { Layout } from '../../components/layout';

import { WhichIs } from './which-is';

import * as S from './styles';
import { Volunteers } from './volunteers';

export function IndexTemplate() {
  return (
    <Layout>
      <Header />

      <S.Container>
        <WhichIs />
        <Volunteers />
      </S.Container>
    </Layout>
  );
}
