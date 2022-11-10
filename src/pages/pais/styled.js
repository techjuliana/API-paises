import styled from "styled-components";

export const Container = styled.div`
  img {
    border-radius: 0.5rem;
  }
`;

export const Voltar = styled.button`
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.header};
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);
  width: 5rem;
  height: 2rem;
`;
