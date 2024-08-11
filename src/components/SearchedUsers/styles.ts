import styled from "styled-components";

export const ParentContainer = styled.section`
  background-color: #3f4448;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 12px;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media screen and (max-width: 768px) {
    order: 2;
    width: 100%;
  }
`;

export const StyledContainer = styled.div`
  background-color: #ddd;
  width: 80%;
  height: 40%;
  padding: 10px;
  margin: 5px auto;
  border-radius: 8px;

  @media screen and (max-width: 768px) {
    width: 60%;
  }
`;

export const Title = styled.h3`
  font-size: 1.2rem;
  padding: 15px;
  color: #ddd;
  margin: 0 auto;
`;

export const Image = styled.img`
  width: 55%;
  height: 50%;
  margin: auto;
  display: block;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;

  @media screen and (max-width: 768px) {
    width: 30%;
    height: 40%;
  }
`;

export const UserInfoContainer = styled.div`
  padding: 1px;
  font-size: 0.8;
`;

export const UserInfo = styled.p`
  padding-top: 3px;
  margin: 5px 20px;
  font-size: 1rem;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    font-size: 0.6rem;
    margin: 5px 20px;
  }
`;

export const Name = styled.p`
  width: 90%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  font-size: 1rem;
  background-color: #223240;
  color: white;
  border-radius: 3px;
  display: flex;

  @media screen and (max-width: 768px) {
    width: 70%;
    text-align: center;
  }
`;
