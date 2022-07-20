import * as React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

import { Navigation } from './navigation';

import * as S from './styles';

export function Header() {
  const [showNav, setShowNav] = React.useState(true);

  function handleOpen() {
    setShowNav(true);
  }

  function handleClose() {
    setShowNav(false);
  }

  return (
    <S.Header>
      <S.Logo>
        <img alt="Logo da Asnov" src="/static/logo.png" />
      </S.Logo>

      <Navigation isOpen={showNav} onClose={handleClose} />

      {!showNav && (
        <S.Menu onClick={handleOpen}>
          <AiOutlineMenu />
        </S.Menu>
      )}
    </S.Header>
  );
}
