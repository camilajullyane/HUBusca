import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Container, Image, Text } from "./styles";

// type UserCardProps = { userData: User};

function UserCard() {
  const { userData, changeModalVisibility, getUserRepositories, userRepoData } =
    useContext(UserContext);
  console.log(userRepoData);

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
              changeModalVisibility(true);
              getUserRepositories();
            }}
          />
          <Text>Nome: {userData.name}</Text>
          <Text>Login: {userData.login}</Text>
          <Text>Localização: {userData.location}</Text>
        </>
      )}
    </Container>
  );
}

export default UserCard;
