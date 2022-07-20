import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

import * as S from './styles';

export function Donate() {
  return (
    <S.Container>
      <S.Figure>
        <StaticImage alt="" src="../../../images/donate.png" />
      </S.Figure>

      <S.StepsContainer>
        <h2>Como doar</h2>

        <S.Steps>
          <li>
            <p>Clique em doar</p>
          </li>
          <li>
            <p>Se cadastre</p>
          </li>
          <li>
            <p>Escolha o método de pagamento</p>
          </li>
        </S.Steps>

        <S.Button>Doar</S.Button>
      </S.StepsContainer>
    </S.Container>
  );
}
