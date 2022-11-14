import { Card } from "../../components/cards/styled";
import Filtros from "../../components/filtros";
import Header from "../../components/header";
import { Container } from "./styled";

export default function Home() {
  return (
    <div>
      <Container>
        <Header />
        <Filtros />
        <Card />
      </Container>
    </div>
  );
}
