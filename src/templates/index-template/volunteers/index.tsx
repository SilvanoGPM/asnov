import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import * as S from './styles';

export function Volunteers() {
  return (
    <>
      <div data-scroll="volunteers" />

      <S.Container>
        <ScrollAnimation animateIn="animate__flipInX" animateOnce>
          <h2>Voluntários</h2>
        </ScrollAnimation>

        <ScrollAnimation animateIn="animate__fadeIn" animateOnce>
          <S.Figure>
            <StaticImage
              alt="Várias pessoas levando caixas"
              src="../../../images/volunteers.png"
              objectFit="cover"
            />
          </S.Figure>
        </ScrollAnimation>

        <S.Description>
          <ScrollAnimation animateIn="animate__flipInY" animateOnce className="animation">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
              similique autem porro eum tenetur cumque mollitia molestias nihil
              explicabo, velit, doloribus delectus facilis? Provident iure unde
              rem quos. Ratione, totam.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animateIn="animate__flipInY" delay={1000} animateOnce className="animation">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
              similique autem porro eum tenetur cumque mollitia molestias nihil
              explicabo, velit, doloribus delectus facilis? Provident iure unde
              rem quos. Ratione, totam.
            </p>
          </ScrollAnimation>
        </S.Description>
      </S.Container>
    </>
  );
}
