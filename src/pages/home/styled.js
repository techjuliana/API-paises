import styled from "styled-components";

export const Container = styled.div`
 /* margin-top: 20rem; */
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  color: ${(props) => props.theme.fontColor};
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);
`;

export const Card = styled.div`
  flex-direction: column;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
  color: ${(props) => props.theme.fontColor};
  background: hsl(209, 23%, 22%);
  width: 20rem;
  img {
    border-radius: 0.5rem 0.5rem 0 0;
  }
  h5 {
    padding-left: 1rem;
    margin: 3px;
  }
`;
