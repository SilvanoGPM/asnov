import styled from 'styled-components';

interface NavProps {
  isOpen: boolean;
}

export const Header = styled.header`
  background-color: var(--blue-500);
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;
`;

export const HeaderSpacer = styled.div`
  width: 100%;
  height: 90px;
`;

export const Logo = styled.figure`
  width: 200px;

  img {
    max-width: 100%;
  }
`;

export const Menu = styled.button`
  --size: 40px;
  background-color: transparent;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--size);
  height: var(--size);
  font-size: 1.5rem;
  border: 1px solid #ffffff;

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
    background-color: var(--blue-500);

    ${Close} {
      display: flex;
    }
  }
`;

export const NavItem = styled.div`
  text-align: center;

  button {
    font-family: 'Spyagency';
    font-weight: 400;
    font-style: italic;
    color: #ffffff;
    border: none;
    font-size: 1rem;
    position: relative;
    background-color: transparent;

    &::after {
      content: '';
      display: block;
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: #ffffff;
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
