import UserCard from "./components/UserCard";
// import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import { GlobalStyle } from "./style/globalStyle";
import { Container } from "./App";
import { UserProvider } from "./contexts/UserContext";

function App() {

  return (
    <body>
      <UserProvider>
        <Container>
          <Header />
          <UserCard />
        </Container>
        <GlobalStyle />
      </UserProvider>
    
    </body>
  )
}

export default App
