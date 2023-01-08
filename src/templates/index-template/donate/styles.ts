import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  margin-top: 8rem;
  flex-direction: column;
  text-align: center;

  h2 {
    font-size: 5rem;
    font-style: italic;
  }

  p {
    font-size: 1.5rem;
    margin-top: -0.5rem;
  }

  @media (min-width: 900px) {
    h2 {
      font-size: 3rem;
    }
  }
`;

export const Figure = styled.figure`
  max-width: 600px;
  margin-right: 2rem;

  img {
    width: 100%;
  }
`;

export const Button = styled.a`
  background-color: var(--brand-500);
  display: block;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  border: none;
  width: 300px;
  max-width: 300px;
  font-weight: bold;
  font-size: 2rem;
  font-size: italic;
  text-transform: uppercase;
  padding: 1rem 0;
  box-shadow: #cccccc 5px 5px, #dddddd 10px 10px, #eeeeee 15px 15px;
  transition: 0.2s box-shadow;
  margin-top: 2rem;

  &:hover {
    box-shadow: rgba(51, 102, 69, 0.4) 5px 5px, rgba(51, 102, 69, 0.3) 10px 10px,
      rgba(51, 102, 69, 0.2) 15px 15px, rgba(51, 102, 69, 0.1) 20px 20px,
      rgba(51, 102, 69, 0.05) 25px 25px;
  }
`;
