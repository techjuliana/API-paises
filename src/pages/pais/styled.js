import styled from "styled-components";

export const Container = styled.div`
  margin: 5rem;
  justify-content: center;
  img {
    border-radius: 0.5rem;
  }
  h4 {
    margin: 5px;
  }
`;

export const Voltar = styled.button`
  background: ${(props) => props.theme.header};
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);
  width: 5rem;
  height: 2rem;
  margin-bottom: 4rem;
  border-radius: 5px;
`;

export const Coluna = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Name = styled.h2`
  margin-bottom: 1rem;
`;

export const Lista1 = styled.div``;

export const Lista2 = styled.div`
  margin-left: 2rem;
`;

export const Front = styled.div``;

export const Info = styled.div``;

export const Centro = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
`;

export const ContainerPais = styled.div`
  display: flex;
  flex-direction: row;
`;
