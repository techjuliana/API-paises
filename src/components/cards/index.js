import { Container, Titulo, Informacao, Card, Grid } from "./styled";

export default function Cards({ nome, img, populacao, regiao, capital }) {
  return (
      <Container>
        <Grid>
          <Card>
            <img src={img} alt="" />
            <Titulo>{nome}</Titulo>
            <Informacao>
              <li>
                População: <span>{populacao}</span>
              </li>
              <li>
                Região: <span>{regiao}</span>
              </li>
              <li>
                Capital: <span>{capital}</span>
              </li>
            </Informacao>
          </Card>
        </Grid>
      </Container>
  );
}
