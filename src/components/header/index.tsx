import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

import { Navigation } from './navigation';

import * as S from './styles';

export function Header() {
  const [showNav, setShowNav] = React.useState(false);

  function handleOpen() {
    setShowNav(true);
  }

  function handleClose() {
    setShowNav(false);
  }

  return (
    <>
      <S.Header>
        <a href="/">
          <S.Logo>
            <StaticImage
              alt="Nome Asnov com um símbolo de reciclagem no lugar do o."
              src="../../images/logo.png"
              placeholder="blurred"
            />
          </S.Logo>
        </a>

        <Navigation isOpen={showNav} onClose={handleClose} />

        {!showNav && (
          <S.Menu aria-label="Abrir menu" onClick={handleOpen}>
            <AiOutlineMenu />
          </S.Menu>
        )}
      </S.Header>

      <S.HeaderSpacer />
    </>
  );
}
