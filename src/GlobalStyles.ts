import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    html {
        overflow-y: scroll;
    }
    body{
        padding-top: 30px;
        margin: 0 auto;
    }
`;
