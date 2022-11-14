import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 body {
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border:none;
  cursor: pointer;
  outline: none;
  text-decoration:none;
  color:inherit;
}

display: flex;
  flex: 1;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  padding-top:14rem;
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  font-family: 'Nunito Sans', sans-serif;
 }
`;
