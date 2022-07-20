import * as React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import * as S from './styles';

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Navigation({ isOpen, onClose }: NavigationProps) {
  return (
    <S.Nav isOpen={isOpen}>
      <S.NavItem>
        <button>Nossa empresa</button>
      </S.NavItem>

      <S.NavItem>
        <button>Voluntário</button>
      </S.NavItem>

      <S.NavItem>
        <button>Localização</button>
      </S.NavItem>

      <S.NavItem>
        <button>Doar</button>
      </S.NavItem>

      <S.Close onClick={onClose}>
        <AiOutlineClose />
      </S.Close>
    </S.Nav>
  );
}
