import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Container, Image, Text } from "./styles";
import { TextContainer } from "../UserModal/styles";

function UserCard() {
  const { userData, changeModalVisibility, getUserRepositories } =
    useContext(UserContext);

  // console.log(userRepoData);

  return (
    <Container>
      {userData === undefined ? (
        <p>Pesquise por um perfil</p>
      ) : (
        <>
          <Image
            src={userData.avatar_url}
            alt="Foto do perfil"
            onClick={() => {
              getUserRepositories(userData.name);
              changeModalVisibility(true);
            }}
          />
          <TextContainer>
            <Text>Nome: {userData.name}</Text>
            <Text>Login: {userData.login}</Text>
            <Text>Localização: {userData.location}</Text>
          </TextContainer>
        </>
      )}
    </Container>
  );
}

export default UserCard;
