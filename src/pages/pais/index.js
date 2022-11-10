import { Link } from "react-router-dom";
import { Voltar, Container } from "./styled";
export default function Pais({
  pais,
  img,
  populacao,
  regiao,
  capital,
  subregiao,
  linguagem,
  nativo,
  dominio,
  moeda,
  front,
}) {
  return (
    <Container>
      <Voltar>
        <Link to={`/`}>
          <h3>Voltar</h3>
        </Link>
      </Voltar>

      <section>
        <img src={img} alt="" />
        <h2>{pais}</h2>
        <h4>Nome nativo:{nativo}</h4>
        <h4>População: {populacao}</h4>
        <h4>Região:{regiao}</h4>
        <h4>Sub Região:{subregiao}</h4>
        <h4>Capital:{capital}</h4>
      </section>

      <section>
        <h4>Domínio de nível superior:{dominio}</h4>
        <h4>Moedas: {moeda}</h4>
        <h4>Línguas:{linguagem}</h4>
      </section>

      <section>
        <h4>Países Fronteiriços:{front}</h4>
      </section>
    </Container>
  );
}
