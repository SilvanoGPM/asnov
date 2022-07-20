import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

import * as S from './styles';

export function Volunteers() {
  return (
    <>
      <div data-scroll="volunteers" />

      <S.Container>
        <h2>Voluntários</h2>

        <S.Figure>
          <StaticImage
            alt="Várias pessoas levando caixas"
            src="../../../images/volunteers.png"
            objectFit="cover"
          />
        </S.Figure>

        <S.Description>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
            similique autem porro eum tenetur cumque mollitia molestias nihil
            explicabo, velit, doloribus delectus facilis? Provident iure unde
            rem quos. Ratione, totam.
          </p>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
            similique autem porro eum tenetur cumque mollitia molestias nihil
            explicabo, velit, doloribus delectus facilis? Provident iure unde
            rem quos. Ratione, totam.
          </p>
        </S.Description>
      </S.Container>
    </>
  );
}
