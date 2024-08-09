import UserCard from "./components/UserCard";
// import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import { GlobalStyle } from "./style/globalStyle";
import { Container } from "./App";
import { UserProvider } from "./contexts/UserContext";
import UserModal from "./components/UserModal";
import "rsuite/dist/rsuite.min.css";

function App() {
  return (
    <>
      <UserProvider>
        <Container>
          <Header />
          <UserCard />
          <UserModal />
        </Container>
        <GlobalStyle />
      </UserProvider>
    </>
  );
}

export default App;
