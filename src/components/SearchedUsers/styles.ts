import styled from "styled-components";

export const ParentContainer = styled.section`
  background-color: black;
  display: flex;
  flex-direction: column;
  width: 22vw;
  height: 100vh;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const StyledContainer = styled.div`
  background-color: lightblue;
  width: 80%;
  height: 40%;
  padding: 10px;
  margin: 5px auto;
  border-radius: 8px;
  /* margin-bottom: 5px; */
`;

export const Title = styled.h3`
  font-size: 1rem;
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
`;

export const Name = styled.p`
  width: 90%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  font-size: 1.2rem;
  background-color: purple;
  color: white;
  border-radius: 3px;
  display: flex;
`;
