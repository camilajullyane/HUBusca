import { HeaderStyled, InputContainer, MainTitle } from "./styles";
import SearchBar from "../SearchBar";

function Header() {
  return (
    <HeaderStyled>
      <MainTitle>HUBusca</MainTitle>
      <InputContainer>
        <SearchBar />
      </InputContainer>
    </HeaderStyled>
  );
}

export default Header;
