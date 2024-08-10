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
  ModalTitle,
  RepoTitle,
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
      aria-describedby="user-repos-info"
    >
      <Modal.Header>
        <ModalTitle style={{}}>Perfil do usuário</ModalTitle>
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
        <RepoTitle>Repositórios</RepoTitle>
        {userRepoData?.map((repo) => {
          return (
            <StyledDiv key={repo.name}>
              <Link href={repo.html_url} target="_blank">
                <Text>Nome: {repo.name}</Text>
              </Link>
              <Text>
                Linguagem:{" "}
                {repo.language === null ? "Não informado" : repo.language}
              </Text>
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
