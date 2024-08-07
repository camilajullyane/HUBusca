import { HeaderStyled, InputContainer } from "./styles";
import SearchBar from "../SearchBar";

function Header() {

    return (
    <HeaderStyled>
        <InputContainer>
        <SearchBar />
        </InputContainer>
    </HeaderStyled>
    )
}

export default Header;
