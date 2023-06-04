import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

import * as S from './styles';
import { AnimateOnScroll } from '../../../components/animate-on-scroll';

export function Donate() {
  return (
    <>
      <div data-scroll="donate" style={{ height: '10px' }} />

      <S.Container>
        <AnimateOnScroll onIn="fadeInUp" delay={250}>
          <h2>Seja um doador</h2>
          <p>A asnov agradece sua ajuda</p>
        </AnimateOnScroll>

        <AnimateOnScroll onIn="fadeInUp" delay={250}>
          <S.Button href="https://www.vakinha.com.br/3379713" target="_blank">
            Doar
          </S.Button>
        </AnimateOnScroll>

        <AnimateOnScroll
          onIn="jackInTheBox"
          delay={750}
        >
          <S.Figure>
            <StaticImage
              alt="Duas pessoas doando produtos, enquanto outras duas auxiliam"
              src="../../../images/donate.png"
            />
          </S.Figure>
        </AnimateOnScroll>
      </S.Container>
    </>
  );
}
