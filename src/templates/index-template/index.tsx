import * as React from 'react';

import { Layout } from '../../components/layout';

import { WhichIs } from './which-is';
import { Volunteers } from './volunteers';

export function IndexTemplate() {
  return (
    <Layout>
      <WhichIs />
      <Volunteers />
    </Layout>
  );
}
