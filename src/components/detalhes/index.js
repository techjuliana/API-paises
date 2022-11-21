import {
  Container,
  Name,
  Lista1,
  Lista2,
  Front,
  Coluna,
  Centro,
  ContainerPais,
} from "./styled";
export default function Detalhes({
  img,
  populacao,
  regiao,
  capital,
  subregiao,
  linguagem,
  nativo,
  dominio,
  moeda,
  fronteira,
  pais,
}) {
  return (
    <Container>
      <ContainerPais>
        <img src={img} alt="" />
        <Centro>
          <Name>{pais}</Name>
          <Coluna>
            <Lista1>
              <li>
                Nativo: <span>{nativo}</span>
              </li>
              <li>
                População: <span> {populacao}</span>
              </li>
              <li>
                Região: <span>{regiao}</span>
              </li>
              <li>
                Sub Região: <span>{subregiao}</span>
              </li>
              <li>
                Capital: <span>{capital}</span>
              </li>
            </Lista1>
            <Lista2>
              <li>
                Domínio de nível superior: <span>{dominio}</span>
              </li>
              <li>
                Moedas:
                <span>{moeda}</span>
              </li>
              <li>
                Línguas:
                <span>{linguagem}</span>
              </li>
            </Lista2>
          </Coluna>
          <Front>
            <li>
              Países Fronteiriços:
              {fronteira}
            </li>
          </Front>
        </Centro>
      </ContainerPais>
    </Container>
  );
}
