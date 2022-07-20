import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as S from './styles';

export function Location() {
  return (
    <>
      <div data-scroll="location" />

      <S.Wrapper>
        <S.Container>
          <S.Location>
            <h2>Localização</h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              hic ullam est, laboriosam placeat cum quis quasi ab enim expedita
              consequuntur, ea, et molestias! Repellendus voluptas officia est
              sapiente commodi.
            </p>
          </S.Location>

          <S.Figure>
            <StaticImage
              alt="Mulher em cima de marcador de mapa azul, com algumas árvores ao lado"
              src="../../../images/location.svg"
            />
          </S.Figure>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
