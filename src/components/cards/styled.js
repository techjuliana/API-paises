import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:10rem;

  img {
    width: 17rem;
  }
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Titulo = styled.h3`
  padding-left: 2rem;
  padding-top: 1rem;
`;

export const Informacao = styled.ol`
  padding: 1rem;
  list-style-type: none;
  margin-left: 1rem;
  li {
    font-weight: bold;
    span {
      font-weight: normal;
    }
  }
`;

export const Card = styled.div`
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
  background: ${(props) => props.theme.header};
  width: 17rem;
  height: 22rem;
  /* padding-bottom: 1.7rem; */
  margin: 2rem;

  img {
    border-radius: 0.5rem 0.5rem 0 0;
  }

  :hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  h5 {
    padding-left: 1rem;
    margin: 3px;
  }
`;
