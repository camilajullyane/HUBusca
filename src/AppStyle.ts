import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 20% 1fr;
  grid-gap: 2rem;
  background-color: #223240;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 45% 1fr;
    grid-gap: 0;
  }
`;

export const MainContent = styled.div`
  display: grid;
  grid-template-rows: 20% 1fr;
  place-items: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
`;
