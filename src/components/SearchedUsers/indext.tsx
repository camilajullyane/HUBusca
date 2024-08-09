import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { User } from "../../models/userModel";
import {
  Title,
  StyledContainer,
  Image,
  UserInfoContainer,
  UserInfo,
} from "./styles";

function SearchedUsers() {
  const { searchedUsersList, changeModalVisibility, setName } =
    useContext(UserContext);

  const handleClick = (name: string) => {
    setName(name);
    changeModalVisibility(true);
  };
  return (
    <ul>
      <Title>Vistos recentemente</Title>
      {searchedUsersList.map((user: User) => {
        return (
          <StyledContainer key={user.id}>
            <Image
              src={user.avatar_url}
              alt="Foto do Usuário"
              onClick={() => handleClick(user.name)}
            />
            <UserInfoContainer>
              <UserInfo>Nome: {user.name}</UserInfo>
              <UserInfo>Login: {user.login}</UserInfo>
              <UserInfo>Localização: {user.location}</UserInfo>
            </UserInfoContainer>
          </StyledContainer>
        );
      })}
    </ul>
  );
}

export default SearchedUsers;
