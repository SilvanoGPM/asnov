import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  margin-top: 4rem;

  @media (max-width: 500px) {
    flex-direction: column-reverse;
    justify-content: center;
    padding-bottom: 1rem;
  }

  p {
    text-align: center;
  }

  a {
    font-size: 3rem;
    color: var(--text);
  }
`;
