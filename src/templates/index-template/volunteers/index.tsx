import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

import * as S from './styles';
import { AnimateOnScroll } from '../../../components/animate-on-scroll';

export function Volunteers() {
  return (
    <>
      <div data-scroll="volunteers" />

      <S.Container>
        <AnimateOnScroll onIn="flipInX">
          <h2>Voluntários</h2>
        </AnimateOnScroll>

        <AnimateOnScroll onIn="fadeIn">
          <S.Figure>
            <StaticImage
              alt="Várias pessoas levando caixas"
              src="../../../images/volunteers.png"
              objectFit="cover"
            />
          </S.Figure>
        </AnimateOnScroll>

        <S.Description>
          <AnimateOnScroll onIn="fadeIn" className="animation">
            <p>
              O sistema de voluntários funcionará de forma simples, serão
              dividos 3 grupos: o dos moradores, da triagem e do armazenamento
              cada grupo terá funções específicas e poderá ajudar de diferentes
              maneiras.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll onIn="fadeIn" delay={500} className="animation">
            <p>
              Você tem interesse em ajudar nossa associação? Se sim é simples,
              basta nos seguir em nossas{' '}
              <a
                href="https://www.instagram.com/asnov.empresa/"
                target="_blank"
              >
                redes sociais
              </a>{' '}
              e preencher o seguinte{' '}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe_F0eyXE7HipDgEooM5g1SKMhUi9e2bfFCz9YUus8vOXwdvg/viewform"
                target="_blank"
              >
                formulário
              </a>{' '}
              para ser chamado, fazendo isso com pouco tempo você poderá já
              estar ajudando.
            </p>
          </AnimateOnScroll>
        </S.Description>
      </S.Container>
    </>
  );
}
