import { Modal } from "rsuite";
import { Image, Text } from "../UserCard/styles";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

function UserModal() {
  const { userData } = useContext(UserContext);

  return (
    <Modal>
      <Modal.Header>
        <p>Perfil do usuário</p>
        <Image src={userData?.avatar_url} alt="Foto do perfil"></Image>
        <Text>Id: {}</Text>
        <Text>Name: {userData?.name}</Text>
        <Text>Login: {userData?.login}</Text>
        <Text>Localização: {userData?.location}</Text>
        <Text>Seguidores: {userData?.followers}</Text>
        <Text>Repositórios públicos: {userData?.public_repos}</Text>
      </Modal.Header>
      <Modal.Body>
        <Modal.Title>
          <Text>Repositórios</Text>
        </Modal.Title>
      </Modal.Body>
    </Modal>
  );
}

export default UserModal;
