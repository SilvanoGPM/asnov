import styled from 'styled-components';

interface NavProps {
  isOpen: boolean;
}

interface HeaderProps {
  scrolled: boolean;
}

export const Logo = styled.figure`
  width: 150px;
  margin-right: 30px;
  transition: 0.1s ease-in-out;

  img {
    max-width: 100%;
  }
`;

export const Menu = styled.button`
  --size: 40px;
  margin-left: auto;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--size);
  height: var(--size);
  font-size: 1.5rem;
  border: 1px solid #ffffff;
  transition: 0.2s ease-in-out;

  @media (min-width: 900px) {
    display: none;
  }
`;

export const Close = styled(Menu)`
  display: none;
  position: absolute;
  z-index: 1;
  top: 1rem;
  right: 1rem;
  border: none;

  & + button {
    margin-top: 0;
  }
`;

export const Nav = styled.nav<NavProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  transition: 0.1s ease-in-out;

  @media (max-width: 900px) {
    overflow: hidden;
    flex-direction: column;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    transition: 0.2s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    height: ${({ isOpen }) => (isOpen ? '100vh' : '0')};
    padding: ${({ isOpen }) => (isOpen ? '4rem 1rem' : '0')};
    background-color: var(--brand-500);

    ${Close} {
      display: flex;
      color: var(--background);
    }
  }
`;

export const Header = styled.header<HeaderProps>`
  background-color: ${({ scrolled }) =>
    scrolled ? 'var(--background)' : 'transparent'};

  box-shadow: ${({ scrolled }) =>
    scrolled
      ? `rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;`
      : 'none'};

  transition: 0.1s ease-in-out;
  height: 90px;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  ${Nav} {
    color: ${({ scrolled }) =>
      scrolled ? 'var(--text-900)' : 'var(--background)'};
  }

  ${Logo} {
    filter: ${({ scrolled }) =>
      scrolled ? 'brightness(1) invert(0)' : 'brightness(0) invert(1)'};
  }

  ${Menu}:not(.close) {
    color: ${({ scrolled }) =>
      scrolled ? 'var(--text-900)' : 'var(--background)'};
  }
`;

export const Sections = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const NavItem = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  button,
  a {
    font-family: 'Lato';
    font-weight: bold;
    color: inherit;
    border: none;
    font-size: 1rem;
    position: relative;
    background-color: transparent;
    text-decoration: none;
    display: flex;
    align-items: center;

    svg {
      margin-right: 0.5rem;
    }

    @media (max-width: 900px) {
      color: var(--background);
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: currentColor;
      transition: 0.2s width;
    }

    &:hover::after {
      width: 50%;
    }
  }

  & + & {
    margin-left: 2rem;

    @media (max-width: 900px) {
      margin-top: 3rem;
      margin-left: 0;
    }
  }
`;

export const Donation = styled.button`
  background-color: var(--brand-500);
  border: none;
  font-weight: bold;
  font-size: 1rem;
  text-transform: uppercase;
  color: var(--background);
  padding: 8px 16px;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s ease-in-out filter;

  &:hover {
    filter: brightness(1.2);

    svg {
      transform: scale(1.25);
    }
  }

  span {
    margin-right: 0.5rem;
  }

  svg {
    font-size: 25px;
    transition: 0.2s ease-in-out transform;
  }

  @media (max-width: 900px) {
    margin-left: 0;
    margin-top: 3rem;
    text-transform: none;
    background: var(--background);
    color: var(--brand-500);
  }
`;
