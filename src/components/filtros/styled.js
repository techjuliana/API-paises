import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom:15rem;
  .Selecione,
  input {
    background: ${(props) => props.theme.button};
  }
`;

export const Centralizar = styled.div`
 z-index: 20;
  top: 4rem;
  padding: 2rem;
  left: 0;
  width: 100%;
  display: flex;
  position: fixed;
  justify-content: space-between;
 
  background: ${(props) => props.theme.body};
`;

export const Pesquisa = styled.input`
  border-radius: 5px;
  padding: 1rem;
  padding-right: 6rem;
`;

export const Selecione = styled.select`
  padding: 1rem;
  padding-right: 1rem;
  border-radius: 5px;
`;
