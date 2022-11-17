import styled from "styled-components";

export const Container = styled.div`
  padding-top: 10rem;
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
  margin-bottom: 4rem;
  border-radius: 5px;
`;

export const Coluna = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Name = styled.h2`
  margin-bottom: 1rem;
  margin-top: 2rem;
`;

export const Lista1 = styled.ol`
  list-style-type: none;
  margin-right: 5rem;
  li {
    font-weight: bold;
    span {
      font-weight: normal;
    }
  }
`;

export const Lista2 = styled.ol`
  list-style-type: none;

  li {
    font-weight: bold;
    span {
      font-weight: normal;
    }
  }
`;

export const Front = styled.div`
  margin-top: 2rem;
  list-style-type: none;
  li {
    font-weight: bold;
    span {
      font-weight: normal;
    }
  }
`;

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

export const Carregando = styled.h2`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 10rem;
`;
