import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import api from "./../../services/api";
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
  Carregando,
} from "./styled";
export default function Detalhes() {
  const { id } = useParams();
  const [informacao, setInformacao] = useState({});
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    async function carregarDetalhes() {
      await api
        .get(`/name/${id}`)
        .then((response) => {
          setInformacao(response.data);
          setLoading(false);
        })
        .catch(() => {
          <h1>Pais não encontrado</h1>;
        });
    }

    carregarDetalhes();

    return () => {
      console.log("sucesso api:)");
    };
  }, []);

  if (loading) {
    return (
      <Carregando>
        <h1>Carregando detalhes...</h1>
      </Carregando>
    );
  }

  return (
    <Container>
      <Info>
        <Voltar>
          <Link to="/">
            <h4>Voltar</h4>
          </Link>
        </Voltar>
      </Info>
      {informacao?.map((informacao, index) => (
        <ContainerPais key={index}>
          <img src={informacao.flags.png} alt="" />
          <Centro>
            <Name>{id}</Name>
            <Coluna>
              <Lista1>
                <li>
                  Nativo: <span>{informacao.name.official}</span>
                </li>
                <li>
                  População:{" "}
                  <span> {informacao.population.toLocaleString()}</span>
                </li>
                <li>
                  Região: <span>{informacao.region}</span>
                </li>
                <li>
                  Sub Região: <span>{informacao.subregion}</span>
                </li>
                <li>
                  Capital: <span>{informacao.capital}</span>
                </li>
              </Lista1>
              <Lista2>
                <li>
                  Domínio de nível superior: <span>{informacao.tld}</span>
                </li>
                <li>
                  Moedas:{" "}
                  <span>
                    {
                      informacao.currencies[
                        Object.keys(informacao.currencies)[0]
                      ].name
                    }
                  </span>
                </li>
                <li>
                  Línguas:
                  <span>
                    {informacao.languages[Object.keys(informacao.languages)[0]]}
                  </span>
                </li>
              </Lista2>
            </Coluna>
            <Front>
              <li>
                Países Fronteiriços:
                {informacao.borders[Object.keys(informacao.borders)[0]]}
              </li>
            </Front>
          </Centro>
        </ContainerPais>
      ))}
    </Container>
  );
}
