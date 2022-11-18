import styled from "styled-components";

export const Cardst = styled.div`
  margin: 1rem;
  flex-wrap: wrap;
`;

export const Grid = styled.section`
  box-sizing: border-box;
  display: grid;
  justify-content: center;
  gap: 5px;
  grid-template-columns: 100px 100px 100px 100px;
  display: flex;
  flex-wrap: wrap;
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
  background: ${(props) => props.theme.button};
`;

export const ErroMensagemPais = styled.h2`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 15rem;
`;

export const ContainerFiltro = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 0rem;
  input {
    background: ${(props) => props.theme.button};
    @media (max-width: 800px) {
      margin-bottom: 1rem;
    }
  }
`;

export const CentralizarFiltro = styled.div`
  z-index: 20;
  top: 4rem;
  padding: 2rem;
  left: 0;
  width: 100%;
  display: flex;
  position: fixed;
  justify-content: space-between;
  background: ${(props) => props.theme.body};
  @media (max-width: 800px) {
    flex-direction: column;
    display: flex;
    top: 3rem;
    padding: 0.6rem;
  }
`;
