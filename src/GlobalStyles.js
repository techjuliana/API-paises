import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 body {
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
  font-family: 'Nunito Sans', sans-serif;
 }
`;
