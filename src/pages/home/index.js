import { Container, Card } from "./styled";
export default function Home({ pais, img, populacao, regiao, capital }) {
  console.log({ populacao });

  return (
    <Container>
      <Card>
        <img src={img} alt="" />
        <h3>{pais}</h3>
        <h5>População:{populacao}</h5>
        <h5>Região: {regiao}</h5>
        <h5>Capital:{capital}</h5>
      </Card>
    </Container>
  );
}
