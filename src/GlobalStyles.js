import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle `
 body {
  background: ${props => props.theme.body};
  color: ${props => props.theme.fontColor};
font-family: 'Nunito Sans', sans-serif;
 }
`