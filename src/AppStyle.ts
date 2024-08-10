import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  /* background-color: #1d1b1b; */
  display: grid;
  grid-template-columns: 20% 1fr;
  grid-gap: 2rem;
`;

export const MainContent = styled.div`
  display: grid;
  grid-template-rows: 15% 1fr;
`;
