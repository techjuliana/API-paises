import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0rem;

  .Selecione,
  input {
    background: ${(props) => props.theme.button};
    @media (max-width: 800px) {
      margin-bottom: 1rem;
    }
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
  @media (max-width: 800px) {
    flex-direction: column;
    display: flex;
    top: 3rem;
    padding: 0.6rem;
  }
`;
