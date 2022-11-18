import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index:10;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);
  background-color: ${(props) => props.theme.header};
  @media (max-width: 800px) {
    flex-direction: row;
    display: flex;
  }
`;

export const Titulo = styled.h1`
  margin: 1rem;
  @media (max-width: 800px) {
    display: flex;
   font-size:20px;
  }
`;

export const Tema = styled.button`
  margin: 1rem;
  font-weight: bold;
  background: ${(props) => props.theme.button};
  @media (max-width: 800px) {
    display: flex;
    margin: 0.8rem;
  }
`;
