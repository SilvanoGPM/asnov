import * as React from 'react';

import { SEO } from '../components/seo';
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
    <SEO title="Asnov - Assosiação de catadores de papel, papelão e material reaproveitável." />
  );
}
