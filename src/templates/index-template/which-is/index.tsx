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
              A Associação de Catadores de Papelão e Material Reaproveitável
              Nova Vida (ASNOV) foi inaugurada em{' '}
              <span>05 de Abril, 2004</span> e é em boa parte responsável pela
              movimentação do mercado da <span>reciclagem no Brasil</span>. Eles representam
              o elo essencial entre nosso consumo e a industria da reciclagem.
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
