import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  body {
    font-family: 'Pretendard', 'Noto Sans KR', Arial, sans-serif;
    margin: 0;
    background: #f8fafc;
    color: #212121;
    min-height: 100vh;
  }
  h1,h2,h3 {margin-top:0;}
  a {text-decoration:none;}
  img {max-width: 100%;}
`;
export default GlobalStyle;
