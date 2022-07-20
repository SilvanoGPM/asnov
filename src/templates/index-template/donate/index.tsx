import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import * as S from './styles';

export function Donate() {
  return (
    <>
      <div data-scroll="donate" />

      <S.Container>
        <ScrollAnimation
          animateIn="animate__jackInTheBox"
          delay={500}
          animateOnce
        >
          <S.Figure>
            <StaticImage
              alt="Duas pessoas doando produtos, enquanto outras duas auxiliam"
              src="../../../images/donate.png"
            />
          </S.Figure>
        </ScrollAnimation>

        <S.StepsContainer>
          <ScrollAnimation
            animateIn="animate__fadeInUp"
            delay={500}
            animateOnce
          >
            <h2>Como doar</h2>
          </ScrollAnimation>

          <S.Steps>
            <li>
              <ScrollAnimation
                animateIn="animate__fadeIn"
                delay={800}
                animateOnce
                className="donateItemWrapper"
              >
                <p>Clique em doar</p>
              </ScrollAnimation>
            </li>

            <li>
              <ScrollAnimation
                animateIn="animate__fadeIn"
                delay={900}
                animateOnce
                className="donateItemWrapper"
              >
                <p>Se cadastre</p>
              </ScrollAnimation>
            </li>

            <li>
              <ScrollAnimation
                animateIn="animate__fadeIn"
                delay={1000}
                animateOnce
                className="donateItemWrapper"
              >
                <p>Escolha o método de pagamento</p>
              </ScrollAnimation>
            </li>
          </S.Steps>

          <ScrollAnimation
            animateIn="animate__fadeInUp"
            delay={1500}
            animateOnce
          >
            <S.Button>Doar</S.Button>
          </ScrollAnimation>
        </S.StepsContainer>
      </S.Container>
    </>
  );
}
