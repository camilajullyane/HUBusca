import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{ 
        font-family: "Montserrat", sans-serif;
        font-weight: 500;
        box-sizing: border;
        margin: 0;
        padding: 0;
        
}

    body {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    }
`;
