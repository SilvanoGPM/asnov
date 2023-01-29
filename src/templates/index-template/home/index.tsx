import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { AiFillInfoCircle } from 'react-icons/ai';
import { FaHandHoldingHeart } from 'react-icons/fa';

import * as S from './styles';
import { ScrollButton } from '../../../components/scroll-button';

export function Home() {
  return (
    <S.Container>
      <S.Figure>
        <StaticImage src="../../../images/home.jpg" alt="" />
      </S.Figure>

      <S.Content>
        <h2>Nos ajude a salvar o mundo</h2>

        <p>
          Associação de Catadores de Papelão e Material Reaproveitável Nova Vida
        </p>

        <S.Actions>
          <ScrollButton dataScroll="which-is">
            <AiFillInfoCircle />
            <span>Sobre nós</span>
          </ScrollButton>

          <ScrollButton dataScroll="donate" className="secondary">
            <FaHandHoldingHeart />
            <span>Doações</span>
          </ScrollButton>
        </S.Actions>
      </S.Content>
    </S.Container>
  );
}
