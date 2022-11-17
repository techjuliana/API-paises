import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 body {
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border:none;
  outline: none;
  text-decoration:none;
  color:inherit;
}

  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  font-family: 'Nunito Sans', sans-serif;
 }
`;
