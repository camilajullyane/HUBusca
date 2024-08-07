import { useContext } from "react";
import { Form, InputField, SearchButtonStyled } from "./styles";
import { IoSearchOutline } from "react-icons/io5";
import { UserContext } from "../../contexts/UserContext";

function SearchBar() {
  const {updateName, getUserData} = useContext(UserContext);

  return (

    <Form>
        <InputField type="text" placeholder="Buscar perfil" onChange={updateName} required/>
        <SearchButtonStyled type="submit" >
          <IoSearchOutline />
        </SearchButtonStyled>
    </Form>
        

  );
}

export default SearchBar;
