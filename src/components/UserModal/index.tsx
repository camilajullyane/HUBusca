import { Modal } from "rsuite";
import { Text } from "../UserCard/styles";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import {
  Link,
  ProfileImage,
  StyledDiv,
  StyledSection,
  TextContainer,
  TextItem,
  Title,
} from "./styles";

function UserModal() {
  const { userData, modalVisibility, changeModalVisibility, userRepoData } =
    useContext(UserContext);

  return (
    <Modal
      open={modalVisibility}
      onClose={() => {
        changeModalVisibility(false);
      }}
      keyboard
    >
      <Modal.Header>
        <Title style={{}}>Perfil do usuário</Title>
        <StyledSection>
          <ProfileImage src={userData?.avatar_url} alt="Foto do perfil" />
          <TextContainer>
            <TextItem>Id: {userData?.id}</TextItem>
            <TextItem>Nome: {userData?.name}</TextItem>
            <TextItem>Login: {userData?.login}</TextItem>
            <TextItem>Localização: {userData?.location}</TextItem>
            <TextItem>Seguidores: {userData?.followers}</TextItem>
            <TextItem>Repositórios públicos: {userData?.public_repos}</TextItem>
          </TextContainer>
        </StyledSection>
      </Modal.Header>
      <Modal.Body>
        <Title>Repositórios</Title>
        {userRepoData?.map((repo) => {
          return (
            <StyledDiv key={repo.name}>
              <Link href={repo.html_url} target="_blank">
                <Text>Nome: {repo.name}</Text>
              </Link>
              <Text>Linguagem: {repo.language}</Text>
              <Text>
                Descrição:{" "}
                {repo.description === null ? "Não informado" : repo.description}
              </Text>
              <Text>Data da criação: {repo.created_at}</Text>
              <Text>Último push: {repo.pushed_at}</Text>
            </StyledDiv>
          );
        })}
      </Modal.Body>
    </Modal>
  );
}

export default UserModal;
