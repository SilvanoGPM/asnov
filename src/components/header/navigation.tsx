import * as React from 'react';
import { AiOutlineClose, AiFillHeart } from 'react-icons/ai';
import { BiCurrentLocation } from 'react-icons/bi';
import { BsTelephoneFill, BsBuilding } from 'react-icons/bs';
import { FaHandsHelping } from 'react-icons/fa';

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
      <S.Sections>
        <S.NavItem>
          <button onClick={handleScrollTo('which-is')}>
            <BsBuilding />
            Nossa empresa
          </button>
        </S.NavItem>

        <S.NavItem>
          <button onClick={handleScrollTo('volunteers')}>
            <FaHandsHelping />
            <span>Voluntários</span>
          </button>
        </S.NavItem>

        <S.NavItem>
          <button onClick={handleScrollTo('location')}>
            <BiCurrentLocation />
            <span>Localização</span>
          </button>
        </S.NavItem>

        <S.NavItem>
          <a href="http://wa.me/5587981727742" target="_blank">
            <BsTelephoneFill />
            Contato
          </a>
        </S.NavItem>
      </S.Sections>

      <S.Donation onClick={handleScrollTo('donate')}>
        <span>Doação</span>
        <AiFillHeart />
      </S.Donation>

      <S.Close className="close" aria-label="Fechar Menu" onClick={onClose}>
        <AiOutlineClose />
      </S.Close>
    </S.Nav>
  );
}
