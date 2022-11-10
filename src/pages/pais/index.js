import { Link } from "react-router-dom";
import {
  Voltar,
  Container,
  Name,
  Lista1,
  Lista2,
  Front,
  Coluna,
  Info,
  Centro,
  ContainerPais,
} from "./styled";
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
      <Info>
        <Voltar>
          <Link to={`/`}>
            <h3>Voltar</h3>
          </Link>
        </Voltar>
      </Info>
      <ContainerPais>
        <img src={img} alt="" />
        <Centro>
          <Name>{pais}</Name>
          <Coluna>
            <Lista1>
              <h4>Nome nativo:{nativo}</h4>
              <h4>População: {populacao}</h4>
              <h4>Região:{regiao}</h4>
              <h4>Sub Região:{subregiao}</h4>
              <h4>Capital:{capital}</h4>
            </Lista1>
            <Lista2>
              <h4>Domínio de nível superior:{dominio}</h4>
              <h4>Moedas: {moeda}</h4>
              <h4>Línguas:{linguagem}</h4>
            </Lista2>
          </Coluna>
          <Front>
            <h4>Países Fronteiriços:{front}</h4>
          </Front>
        </Centro>
      </ContainerPais>
    </Container>
  );
}
