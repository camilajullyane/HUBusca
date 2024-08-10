import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  /* background-color: yellow; */
  width: 100%;
  max-width: 400px;
  justify-content: space-evenly;
  box-shadow: 0 1px 2px rgb(0, 0, 0, 0.1);
  gap: 13px;
  padding-right: 13px;
`;

export const InputField = styled.input`
  padding: 13px;
  flex-grow: 1;
  border: none;
  outline: none;
  font-size: 0.8rem;
  font-weight: 500;
  border-right: 1px solid #ddd;
`;

export const SearchButtonStyled = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  cursor: pointer;
`;
