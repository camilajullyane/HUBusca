import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Container, Image, InfoContainer, Text } from "./styles";

// function UserCard() {
//   const { userData, changeModalVisibility, getUserRepositories } =
//     useContext(UserContext);

//   // console.log(userRepoData);

//   return (
//     <Container>
//       {userData === undefined ? (
//         <p>Pesquise por um perfil</p>
//       ) : (
//         <>
//           <Image
//             src={userData.avatar_url}
//             alt="Foto do perfil"
//             onClick={() => {
//               getUserRepositories(userData.login);
//               changeModalVisibility(true);
//             }}
//           />
//           <TextContainer>
//             <Text>Nome: {userData.name}</Text>
//             <Text>Login: {userData.login}</Text>
//             <Text>Localização: {userData.location}</Text>
//           </TextContainer>
//         </>
//       )}
//     </Container>
//   );
// }

// export default UserCard;

function UserCard() {
  const { changeModalVisibility } = useContext(UserContext);

  // console.log(userRepoData);
  const userData = {
    avatar_url:
      "https://avatars.githubusercontent.com/u/134438133?s=400&u=a2c421fab823b36c7abc2d750e50890083b21ab9&v=4",
    login: "134438133",
    name: "Camila Jullyane",
    location: "Gravatá-PE",
  };

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
              // getUserRepositories(userData.login);
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
