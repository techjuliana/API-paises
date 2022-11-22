import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
  font-weight: normal;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    padding-top: 0rem;
    margin: 0rem;
  }
  img {
    border-radius: 0.5rem;
    width: 30rem;
    @media (max-width: 800px) {
      max-width: 10rem;
    }
  }
  h5 {
    margin: 5px;
  }
`;

export const Coluna = styled.div`
  display: flex;
  justify-content: flex-start;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Name = styled.h2`
  margin-bottom: 1rem;
  margin-top: 2rem;
`;

export const Lista1 = styled.ol`
  list-style-type: none;
  margin-right: 5rem;
  @media (max-width: 800px) {
    margin-right: 0rem;
  }
`;

export const Lista2 = styled.ol`
  list-style-type: none;
`;


export const Centro = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
  @media (max-width: 800px) {
    margin-left: 0rem;
  }
`;

export const ContainerPais = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
