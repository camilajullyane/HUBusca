import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { User } from "../../models/userModel";
import {
  Title,
  StyledContainer,
  Image,
  UserInfoContainer,
  UserInfo,
  Name,
  ParentContainer,
} from "./styles";

function SearchedUsers() {
  const { searchedUsersList, changeModalVisibility, setName } =
    useContext(UserContext);

  const handleClick = (userName: string) => {
    setName(userName);
    changeModalVisibility(true);
  };
  return (
    <ParentContainer>
      <Title>Vistos recentemente</Title>
      {searchedUsersList.map((user: User) => {
        return (
          <StyledContainer key={user.id}>
            <Image
              src={user.avatar_url}
              alt="Foto do Usuário"
              onClick={() => {
                handleClick(user.login);
              }}
            />
            <UserInfoContainer>
              <Name>{user.name}</Name>
              <UserInfo>{user.login}</UserInfo>
              <UserInfo>{user.location}</UserInfo>
            </UserInfoContainer>
          </StyledContainer>
        );
      })}
    </ParentContainer>
  );
}

export default SearchedUsers;
