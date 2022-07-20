import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  margin: 4rem 0 1rem;

  @media (max-width: 500px) {
    flex-direction: column-reverse;
    justify-content: center;
    padding-bottom: 1rem;
  }

  p {
    text-align: center;
  }

  a {
    font-size: 1.8rem;
    padding: 0.5rem;
    border-radius: 50%;
    color: #ffffff;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    & + a {
      margin-left: 0.5rem;
    }
  }
`;
