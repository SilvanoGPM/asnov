import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8rem;

  h2 {
    color: var(--brand-500);
    font-size: clamp(1.5rem, 8vw, 3rem);
    text-transform: uppercase;
    font-weight: bolder;
    margin-bottom: 3rem;

    @media (max-width: 500px) {
      align-self: start;
    }
  }

  p {
    font-size: clamp(1.1rem, 6vw, 2rem);
    font-weight: 100;
    color: var(--gray);

    @media (max-width: 1080px) {
      max-width: 700px;
    }
  }
`;

export const Figure = styled.figure`
  max-width: 100%;
  margin-bottom: 1rem;

  img {
    width: 100%;
  }
`;

export const Description = styled.div`
  display: flex;

  @media (max-width: 1080px) {
    flex-direction: column;
  }

  p {
    text-align: justify;

    a {
      color: var(--brand-500);
      font-weight: bold;
      text-decoration: none;
      position: relative;

      &::after {
        content: '';
        display: block;
        background-color: var(--brand-500);
        position: absolute;
        bottom: 0;
        left: 0;
        height: 2px;
        width: 0;
        transition: 0.2s ease-in-out;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }

  .animation {
    flex: 1;
    & + .animation {
      @media (max-width: 1080px) {
        margin-left: 0;
        margin-top: 2rem;
      }

      margin-left: 4rem;
    }
  }
`;
