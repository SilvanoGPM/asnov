import * as React from 'react';
import { AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai';

import * as S from './styles';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <S.Footer>
      <p>Copyright &copy; {year} - Asnov All Right Reserved</p>

      <div>
        <a
          aria-label="Página no Instagram"
          href="https://www.instagram.com/asnov.empresa/"
          target="_blank"
          style={{ background: '#C13584' }}
        >
          <AiOutlineInstagram />
        </a>

        <a
          aria-label="Página no Facebook"
          href="https://www.facebook.com/ASNOV-101297262668673/?ref=page_internal"
          target="_blank"
          style={{ background: '#4267B2' }}
        >
          <AiOutlineFacebook />
        </a>
      </div>
    </S.Footer>
  );
}
