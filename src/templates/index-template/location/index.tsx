import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Wave from 'react-wavify';

import * as S from './styles';
import { AnimateOnScroll } from '../../../components/animate-on-scroll';

export function Location() {
  return (
    <>
      <div data-scroll="location" />

      <S.Wave>
        <Wave fill="#336645" />
      </S.Wave>

      <S.Wrapper>
        <S.Container>
          <S.Location>
            <AnimateOnScroll onIn="fadeInLeft">
              <h2>Localização</h2>
            </AnimateOnScroll>

            <AnimateOnScroll onIn="fadeInLeft" delay={500}>
              <p>
                Nossas instalações ficam localizadas no bairro{' '}
                <a
                  href="https://www.google.com/maps/place/Dom+H%C3%A9lder+C%C3%A2mara,+Garanhuns+-+PE/@-8.8612241,-36.4989465,15z/data=!3m1!4b1!4m5!3m4!1s0x7070ccc793ff379:0x8c45bfd943f2edde!8m2!3d-8.8647063!4d-36.5042448"
                  target="_blank"
                >
                  Dom Hélder Câmara
                </a>{' '}
                localizado na Cohab 3 em{' '}
                <a
                  href="https://www.google.com/maps/place/Garanhuns+-+PE/data=!4m2!3m1!1s0x7070ce9b301ca65:0x8e6141e4b9b7632d?sa=X&ved=2ahUKEwi-4dHD-4f5AhUKupUCHeZcAUQQ8gF6BAgCEAE"
                  target="_blank"
                >
                  Garanhuns/PE
                </a>{' '}
                caso deseje nós visitar, avise através de nossas redes que lhe
                receberemos com todo prazer.
              </p>
            </AnimateOnScroll>
          </S.Location>

          <AnimateOnScroll onIn="fadeInRight" delay={800}>
            <S.Figure>
              <StaticImage
                alt="Mulher em cima de marcador de mapa azul, com algumas árvores ao lado"
                src="../../../images/location.png"
              />
            </S.Figure>
          </AnimateOnScroll>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
