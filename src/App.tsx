import UserCard from "./components/UserCard";
import Header from "./components/Header";
import { GlobalStyle } from "./style/globalStyle";
import { Container, MainContent } from "./AppStyle";
import { UserProvider } from "./contexts/UserContext";
import UserModal from "./components/UserModal";
import "rsuite/dist/rsuite.min.css";
import SearchedUsers from "./components/SearchedUsers/indext";

function App() {
  return (
    <>
      <UserProvider>
        <Container>
          <SearchedUsers />
          <MainContent>
            <Header />
            <UserCard />
          </MainContent>
        </Container>
        <UserModal />
        <GlobalStyle />
      </UserProvider>
    </>
  );
}

export default App;
