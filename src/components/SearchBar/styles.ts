import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  width: 100%;
  max-width: 280px;
  box-shadow: 0 1px 2px rgb(0, 0, 0, 0.1);
  gap: 13px;
  padding-right: 13px;

  @media (max-width: 768px) {
    padding-right: 5px;
    gap: 5px;
  }

  @media (max-width: 576px) {
    max-width: 100%;
    padding-right: 2px;
    gap: 2px;
  }
`;

export const InputField = styled.input`
  padding: 5px;
  flex-grow: 1;
  border: none;
  outline: none;
  font-size: 0.8rem;
  font-weight: 500;
  border-right: 1px solid #ddd;

  @media (max-width: 600px) {
    padding: 3px;
    font-size: 0.7rem;
  }

  @media (max-width: 300px) {
    padding: 2px;
    font-size: 0.6rem;
  }
`;

export const SearchButtonStyled = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #347355;
  cursor: pointer;

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }

  @media (max-width: 300px) {
    font-size: 0.6rem;
  }
`;
