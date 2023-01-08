import styled from 'styled-components';

export const Wrapper = styled.section`
  background-color: var(--brand-500);
  padding: 4rem 0;
  margin-top: 8rem;
`;

export const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;

export const Figure = styled.figure`
  max-width: 600px;

  @media (max-width: 1080px) {
    margin-top: 2rem;
  }

  img {
    width: 100%;
  }
`;

export const Location = styled.div`
  h2 {
    color: #ffffff;
    font-size: clamp(1.5rem, 8vw, 3rem);
    text-transform: uppercase;
    font-weight: bolder;
    margin-bottom: 2rem;

    @media (max-width: 500px) {
      align-self: start;
    }
  }

  p {
    font-size: clamp(1.1rem, 6vw, 2rem);
    font-weight: 100;
    color: #ffffff;
    max-width: 600px;
    text-align: justify;

     a {
      color: var(--brand-100);
      text-decoration: none;
      position: relative;

      &::after {
        content: '';
        display: block;
        background-color: var(--brand-100);
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
`;
