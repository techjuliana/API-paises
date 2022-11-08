import styled from 'styled-components'

export const Container = styled.div`
color: ${props => props.theme.fontColor};
`
export const Card = styled.div`
border-radius:0.5rem;
color: ${props => props.theme.fontColor};
  background: hsl(209, 23%, 22%);
  width: 20rem;
  img {
    border-radius: 0.5rem 0.5rem 0 0
   ;
  }

`