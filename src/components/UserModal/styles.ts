import styled from "styled-components";

export const ProfileImage = styled.img`
  width: 30%;
  height: 30%;
  display: block;
  padding: 20px;
  border-radius: 50%;
  @media screen and (max-width: 756px) {
    width: 20%;
    height: 20%;
  }
`;

export const StyledSection = styled.section`
  background-color: #ddd;
  display: flex;
  border-radius: 10px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  width: 70%;

  @media screen and (max-width: 756px) {
    font-size: 0.6rem;
  }
`;

export const TextItem = styled.p`
  margin: 0;
  padding: 5px 0;
`;

export const ModalTitle = styled.p`
  justify-content: center;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;

  padding-bottom: 5px;
`;

export const StyledDiv = styled.div`
  border-bottom: 2px solid black;
  margin: 1rem 0;
  padding: 10px;
`;

export const RepoTitle = styled.p`
  justify-content: center;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
  border-bottom: 2px solid black;

  padding-bottom: 5px;
`;
