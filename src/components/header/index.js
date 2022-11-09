import { Container, Titulo, Tema } from "./styled";

export default function Header({ funcao }) {
  return (
    <Container>
      <Titulo>Onde no mundo?</Titulo>
      <Tema onClick={() => funcao()}>🌙 Tema Escuro</Tema>
    </Container>
  );
}
