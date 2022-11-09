import { Card, Container } from "./styled";
import { Link } from "react-router-dom";
export default function Home({ pais, img, populacao, regiao, capital }) {
  console.log({ populacao });

  return (
    <Container>
      <Card>
        <section>
          <Link to={`/pais?text=${pais}`}>
            <img src={img} alt="" />
          </Link>

          <h3>{pais}</h3>
          <h5>População:{populacao}</h5>
          <h5>Região: {regiao}</h5>
          <h5>Capital:{capital}</h5>
        </section>
      </Card>
    </Container>
  );
}
