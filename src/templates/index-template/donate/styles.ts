import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8rem;

  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;

export const Figure = styled.figure`
  max-width: 600px;
  margin-right: 2rem;

  img {
    width: 100%;
  }
`;

export const StepsContainer = styled.div`
  h2 {
    color: var(--blue-500);
    font-size: clamp(1.5rem, 8vw, 3rem);
    text-transform: uppercase;
    font-weight: bolder;
    margin-bottom: 2rem;
  }
`;

export const Steps = styled.ul`
  padding-left: 2rem;
  margin-bottom: 2rem;
  list-style: none;

  li {
    font-size: clamp(1.1rem, 6vw, 1.8rem);
    font-weight: 100;
    color: var(--gray);
    text-transform: uppercase;

    p {
      flex: 1;
    }

    .donateItemWrapper {
      display: flex;
      align-items: center;

      &::before {
        --size: 0.8rem;
        content: '';
        display: block;
        background-color: var(--blue-500);
        border-radius: 50%;
        height: var(--size);
        width: var(--size);
        margin-right: var(--size);
      }
    }

    & + li {
      margin-top: 1rem;
    }
  }
`;

export const Button = styled.button`
  background-color: var(--blue-100);
  color: #ffffff;
  border: none;
  max-width: 200px;
  width: 100%;
  font-weight: bold;
  font-size: 2rem;
  font-size: italic;
  text-transform: uppercase;
  padding: 1rem 0;
  box-shadow: #cccccc 5px 5px, #dddddd 10px 10px, #eeeeee 15px 15px;
  transition: 0.2s box-shadow;

  &:hover {
    box-shadow: rgba(21, 244, 238, 0.4) 5px 5px,
      rgba(21, 244, 238, 0.3) 10px 10px, rgba(21, 244, 238, 0.2) 15px 15px,
      rgba(21, 244, 238, 0.1) 20px 20px, rgba(21, 244, 238, 0.05) 25px 25px;
  }
`;
