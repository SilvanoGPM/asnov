import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import ScrollAnimation from 'react-animate-on-scroll';

import * as S from './styles';

export function WhichIs() {
  return (
    <>
      <div data-scroll="which-is" />
      <S.Container>
        <S.WhichIs>
          <ScrollAnimation animateIn="animate__fadeIn" animateOnce>
            <h2>O que é a Asnov?</h2>
          </ScrollAnimation>

          <ScrollAnimation animateIn="animate__fadeIn" delay={800} animateOnce>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
              fugit, sequi qui dicta illum quae, deleniti sint, explicabo
              voluptatum iusto numquam earum placeat labore culpa neque
              voluptate ducimus quidem. Architecto.
            </p>
          </ScrollAnimation>
        </S.WhichIs>

        <S.Figure>
          <StaticImage
            alt="Duas garotas ao lado de uma lata de lixo, uma garota com uma vassoura na mão, outra com celular uma garrafa de água em uma mão e tirando uma selfie com a outra"
            src="../../../images/which-is.png"
          />
        </S.Figure>
      </S.Container>
    </>
  );
}
