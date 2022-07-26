import * as React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { scrollToElement } from '../../utils/scroll-to-element';

import * as S from './styles';

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Navigation({ isOpen, onClose }: NavigationProps) {
  function handleScrollTo(dataScroll: string) {
    return () => {
      scrollToElement(dataScroll);
      onClose();
    };
  }

  return (
    <S.Nav isOpen={isOpen}>
      <S.NavItem>
        <button onClick={handleScrollTo('which-is')}>Nossa empresa</button>
      </S.NavItem>

      <S.NavItem>
        <button onClick={handleScrollTo('volunteers')}>Voluntário</button>
      </S.NavItem>

      <S.NavItem>
        <button onClick={handleScrollTo('location')}>Localização</button>
      </S.NavItem>

      <S.NavItem>
        <button onClick={handleScrollTo('donate')}>Doar</button>
      </S.NavItem>

      <S.Close aria-label="Fechar Menu" onClick={onClose}>
        <AiOutlineClose />
      </S.Close>
    </S.Nav>
  );
}
