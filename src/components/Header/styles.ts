import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: row;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border-radius: 10px;
  background-color: #ddd;

  @media screen and (max-width: 768px) {
    width: 50%;
  }
`;

export const MainTitle = styled.p`
  color: #ddd;
  font-size: 2.5rem;
  font-weight: 600;
  margin: 30px 20px;
  letter-spacing: 1.5px;

  @media screen and (max-width: 768px) {
    margin: 0;
    font-size: 0.75rem;
    display: none;
  }
`;
