import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import * as S from './styles';

export function Donate() {
  return (
    <>
      <div data-scroll="donate" style={{ height: '10px' }} />

      <S.Container>
        <ScrollAnimation animateIn="animate__fadeInUp" delay={250} animateOnce>
          <h2>Seja um doador</h2>
          <p>A asnov agradece sua ajuda</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="animate__fadeInUp" delay={500} animateOnce>
          <S.Button href="https://www.vakinha.com.br/3379713" target="_blank">
            Doar
          </S.Button>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn="animate__jackInTheBox"
          delay={750}
          animateOnce
        >
          <S.Figure>
            <StaticImage
              alt="Duas pessoas doando produtos, enquanto outras duas auxiliam"
              src="../../../images/donate.png"
            />
          </S.Figure>
        </ScrollAnimation>
      </S.Container>
    </>
  );
}
