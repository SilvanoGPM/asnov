import * as React from 'react';

import { IndexTemplate } from '../templates/index-template';

export default function Index() {
  return (
    <>
      <IndexTemplate />
    </>
  );
}

export function Head() {
  return (
    <title>Asnov - Assosiação de catadores de papel, papelão e material reaproveitável.</title>
  );
}
