import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as S from './styles';

export function Header() {
  return (
    <S.Header>
      <figure style={{ width: '200px' }}>
        <img alt="Logo da Asnov" src="/static/logo.png" style={{ width: '100%' }} />
      </figure>
    </S.Header>
  );
}
