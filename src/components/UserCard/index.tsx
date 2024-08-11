import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Container, Image, InfoContainer, Text } from "./styles";

function UserCard() {
  const { userData, changeModalVisibility, getUserRepositories } =
    useContext(UserContext);

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
              getUserRepositories(userData.login);
              changeModalVisibility(true);
            }}
          />
          <InfoContainer>
            <Text>Nome: {userData.name}</Text>
            <Text>Login: {userData.login}</Text>
            <Text>Localização: {userData.location}</Text>
          </InfoContainer>
        </>
      )}
    </Container>
  );
}

export default UserCard;
