import styled from "styled-components";

export const Container = styled.div`
  margin: 5rem;
  justify-content: center;
  font-weight: normal;
  img {
    border-radius: 0.5rem;
    width: 30rem;
  }
  h5 {
    margin: 5px;
  }
`;

export const Voltar = styled.button`
  background: ${(props) => props.theme.header};
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);
  width: 5rem;
  height: 2rem;
  margin-top:4rem;
  margin-bottom: 4rem;
  border-radius: 5px;
  @media (max-width: 800px) {
    margin-bottom: 1rem;
  }
`;

export const Info = styled.div``;

export const Carregando = styled.h2`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 10rem;
  @media (max-width: 800px) {
    font-size: 10px;
  }
`;
