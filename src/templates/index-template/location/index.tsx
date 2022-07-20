import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import ScrollAnimation from 'react-animate-on-scroll';

import * as S from './styles';

export function Location() {
  return (
    <>
      <div data-scroll="location" />

      <S.Wrapper>
        <S.Container>
          <S.Location>
            <ScrollAnimation
              animateIn="animate__fadeInLeft"
              animateOnce
            >
              <h2>Localização</h2>
            </ScrollAnimation>

            <ScrollAnimation
              animateIn="animate__fadeInLeft"
              delay={500}
              animateOnce
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti hic ullam est, laboriosam placeat cum quis quasi ab
                enim expedita consequuntur, ea, et molestias! Repellendus
                voluptas officia est sapiente commodi.
              </p>
            </ScrollAnimation>
          </S.Location>

          <ScrollAnimation
            animateIn="animate__fadeInRight"
            delay={800}
            animateOnce
          >
            <S.Figure>
              <StaticImage
                alt="Mulher em cima de marcador de mapa azul, com algumas árvores ao lado"
                src="../../../images/location.svg"
              />
            </S.Figure>
          </ScrollAnimation>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
