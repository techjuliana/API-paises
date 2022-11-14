import styled from "styled-components";

export const Container = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    flex-direction: column;
  }

`;