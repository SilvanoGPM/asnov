import * as React from 'react';

import { Layout } from '../../components/layout';

import { WhichIs } from './which-is';
import { Volunteers } from './volunteers';
import { Donate } from './donate';

export function IndexTemplate() {
  return (
    <Layout>
      <WhichIs />
      <Volunteers />
      <Donate />
    </Layout>
  );
}
