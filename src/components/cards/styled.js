import styled from "styled-components";

export const Container = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    flex-direction: column;
  }

`;

export const Titulo = styled.h3`
  padding-left: 2rem;
  padding-top: 1rem;
`;

export const Informacao = styled.h3`
  padding: 1rem;
`;


export const Card = styled.div`
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
  background: ${(props) => props.theme.header};
  width: 20rem;
 
  img {
    border-radius: 0.5rem 0.5rem 0 0;
  }

 :hover {
   -webkit-transform: scale(1.1);
   transform: scale(1.1);
}
  h5 {
    padding-left: 1rem;
    margin: 3px;
  }
`;
