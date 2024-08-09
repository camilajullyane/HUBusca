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
// import UserModal from "../UserModal";

function SearchedUsers() {
  const {
    searchedUsersList,
    changeModalVisibility,
    setName,
    // getUserRepositories,
  } = useContext(UserContext);

  const handleClick = (userName: string) => {
    console.log("userName:", userName);

    setName(userName);
    changeModalVisibility(true);
    // getUserRepositories(name);
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
              onClick={() => {
                handleClick(user.login);
              }}
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
