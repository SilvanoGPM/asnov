import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  min-height: 500px;
  position: relative;
  text-align: center;
`;

export const Figure = styled.figure`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.5);

    @media screen and (max-width: 850px) {
      min-height: 700px;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 2rem;

  color: var(--background);
  text-transform: uppercase;

  h2 {
    font-weight: 900;
    font-size: 3rem;

    @media screen and (max-width: 850px) {
      font-size: 2rem;
    }
  }

  @media screen and (max-width: 400px) {
    padding-top: 8rem;
  }

  @media screen and (max-width: 600px) {
    padding-top: 4rem;
  }
`;

export const Actions = styled.div`
  margin-top: 4rem;
  display: flex;
  gap: 1rem;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }

  button {
    background-color: var(--brand-500);
    border: none;
    color: inherit;
    padding: 0.5rem 1.5rem;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1.7rem;
    display: flex;
    align-items: center;
    transition: 0.2s ease-in-out filter;

    &.secondary {
      background-color: var(--brand-100);
    }

    &:hover {
      filter: brightness(1.2);
    }

    svg {
      margin-right: 0.5rem;
    }
  }
`;
