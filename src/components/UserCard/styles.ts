import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 35%;
  /* max-width: 300px; */
  height: 70%;
  background-color: #ddd;
  margin: 50px auto;
  border-radius: 10px;

  @media (max-width: 300px) {
    max-width: 100%;
    height: auto;
    margin: 20px auto;
  }
`;

export const Image = styled.img`
  width: 60%;
  height: 60%;
  margin: auto;
  display: block;
  padding: 30px;
  cursor: pointer;
  border-radius: 50%;

  @media (max-width: 300px) {
    width: 80%;
    height: auto;
    padding: 10px;
  }
`;

export const Text = styled.p`
  font-size: 1 rem;
  font-weight: 500;
  padding-bottom: 5px;
  color: #2f2531;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding-bottom: 4px;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
    padding-bottom: 3px;
  }

  @media (max-width: 300px) {
    font-size: 0.6rem;
    padding-bottom: 2px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  width: 70%;
`;
