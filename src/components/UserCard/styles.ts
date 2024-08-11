import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 70%;
  background-color: #ddd;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 60%;
    height: 50%;
  }
`;

export const Image = styled.img`
  width: 40%;
  height: 50%;
  margin: auto;
  display: block;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 35%;
    height: 45%;
    padding: 8px;
  }

  @media (max-width: 576px) {
    width: 45%;
    height: 60%;
    padding: 5px;
  }
`;

export const Text = styled.p`
  font-size: 0.8rem;
  font-weight: 500;
  padding-bottom: 3px;
  color: #2f2531;

  @media (max-width: 768px) {
    font-size: 0.6rem;
    padding-bottom: 2px;
  }

  @media (max-width: 576px) {
    font-size: 0.5rem;
    padding-bottom: 0;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  width: 70%;

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 576px) {
    width: 90%;
  }
`;
