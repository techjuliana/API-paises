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
export default function Detalhes({
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
          <Link to="/">
            <h4>Voltar</h4>
          </Link>
        </Voltar>
      </Info>
      <ContainerPais>
        <img src={img} alt="" />
        <Centro>
          <Name>{pais}</Name>
          <Coluna>
            <Lista1>
              <h5>Nome nativo: {nativo}</h5>
              <h5>População: {populacao}</h5>
              <h5>Região: {regiao}</h5>
              <h5>Sub Região: {subregiao}</h5>
              <h5>Capital: {capital}</h5>
            </Lista1>
            <Lista2>
              <h5>Domínio de nível superior: {dominio}</h5>
              <h5>Moedas: {moeda}</h5>
              <h5>Línguas: {linguagem}</h5>
            </Lista2>
          </Coluna>
          <Front>
            <h5>Países Fronteiriços: {front}</h5>
          </Front>
        </Centro>
      </ContainerPais>
    </Container>
  );
}
