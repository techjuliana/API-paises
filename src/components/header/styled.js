import styled from 'styled-components'

export const Container = styled.div`
display: flex;
justify-content: space-between;
 /* position: fixed; */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
 
  /* padding-bottom:10rem; */
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);
  /* padding: 0.5rem 0; */
  background: hsl(209, 23%, 22%);
color: ${props => props.theme.fontColor};

`

export const Titulo = styled.h1`
margin:1rem;
color: ${props => props.theme.fontColor};
`

export const Tema  = styled.button`
margin:1rem;
font-weight: bold;
border:none;
cursor: pointer;
  outline: none;
color: ${props => props.theme.fontColor};
`