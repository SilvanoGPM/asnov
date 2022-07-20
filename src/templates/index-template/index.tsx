import * as React from 'react';

import { Layout } from '../../components/layout';

import { WhichIs } from './which-is';
import { Volunteers } from './volunteers';
import { Donate } from './donate';
import { Location } from './location';

import * as S from './styles';

export function IndexTemplate() {
  return (
    <Layout>
      <S.Container>
        <WhichIs />
        <Volunteers />
      </S.Container>

      <Location />

      <S.Container>
        <Donate />
      </S.Container>
    </Layout>
  );
}
