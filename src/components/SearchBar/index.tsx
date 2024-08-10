/* eslint-disable @typescript-eslint/no-unused-vars */
import { FormEvent, useContext, useState } from "react";
import { Form, InputField, SearchButtonStyled } from "./styles";
import { IoSearchOutline } from "react-icons/io5";
import { UserContext } from "../../contexts/UserContext";

type FormState = {
  name: string;
};

function SearchBar() {
  const { setName } = useContext(UserContext);

  const [formData, setFormData] = useState<FormState>({
    name: "",
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setName(formData.name);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputField
        type="text"
        name="name"
        placeholder="Buscar perfil"
        onChange={handleChange}
        required
      />
      <SearchButtonStyled type="submit">
        <IoSearchOutline />
      </SearchButtonStyled>
    </Form>
  );
}

export default SearchBar;
