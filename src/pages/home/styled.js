import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  /* display: flex;
  flex-wrap: wrap; */
`;

export const Card = styled.div`
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
  background: ${(props) => props.theme.header};
  width: 20rem;
  img {
    border-radius: 0.5rem 0.5rem 0 0;
  }
  h5 {
    padding-left: 1rem;
    margin: 3px;
  }
`;
