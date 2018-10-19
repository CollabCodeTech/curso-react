import { createGlobalStyle } from "styled-components";

const GlobalSize = createGlobalStyle`
  :root {
    --spacing-small: 10px;
    --spacing-medium: 20px;
    --spacing-big: 40px;

    --radius: 4px;
  }
`;

export default GlobalSize;
