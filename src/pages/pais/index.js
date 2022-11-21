import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Voltar, Container, Info, Carregando } from "./styled";
import Detalhes from "../../components/detalhes";
export default function Pais() {
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
      {informacao?.map((informacao, id) => (
        <Detalhes
          key={id}
          img={informacao.flags.png}
          pais={informacao.name.common}
          populacao={informacao.population.toLocaleString()}
          regiao={informacao.region}
          capital={informacao.capital}
          subregiao={informacao.subregion}
          linguagem={informacao.languages[Object.keys(informacao.languages)[0]]}
          nativo={informacao.name.official}
          dominio={informacao.tld}
          fronteira={informacao.borders[Object.keys(informacao.borders)[0]]}
          moeda={
            informacao.currencies[Object.keys(informacao.currencies)[0]].name
          }
        />
      ))}
    </Container>
  );
}
