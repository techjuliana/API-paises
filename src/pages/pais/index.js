import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Voltar, Container, Info, Carregando } from "./styled";
import Detalhes from "../../components/detalhes";
export default function Pais() {
  const { id } = useParams();
  const [informacao, setInformacao] = useState({});
  const [carregamento, setCarregamento] = useState(true);

  useEffect(() => {
    async function carregarDetalhes() {
      await api
        .get(`/name/${id}`)
        .then((response) => {
          setInformacao(response.data);
          setCarregamento(false);
        })
        .catch(() => {
          <h1>Detalhes não encontrado</h1>;
        });
    }

    carregarDetalhes();

    return () => {
      console.log("carregado com sucesso");
    };
  }, []);

  if (carregamento) {
    return (
      <Carregando> Carregando detalhes...</Carregando>
    );
  }

  return (
    <Container>
      <Info>
        <Voltar>
          <Link to="/">Voltar</Link>
        </Voltar>
      </Info>
      {informacao?.map((informacao, id) => (
        <div key={id}>
        <Detalhes
          img={informacao.flags.png}
          pais={informacao.name.common}
          populacao={informacao.population.toLocaleString()}
          regiao={informacao.region}
          capital={informacao.capital}
          subregiao={informacao.subregion}
          // linguagem={informacao?.languages[Object.keys(informacao.languages)[0]]}
          nativo={informacao.name.official}
          dominio={informacao.tld}
          // fronteira={informacao?.borders[Object.keys(informacao.borders)[0]]}
          // moeda={informacao?.currencies[Object.keys(informacao.currencies)[0]].name}
        />
        </div>
      ))}
    </Container>
  );
}
