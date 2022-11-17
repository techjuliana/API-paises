import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from "react";
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
export default function Detalhes() {

  const {id} = useParams();

  const [informacao, setInformacao] = useState([]);

  function pegandoInformacao() {
    fetch("https://restcountries.com/v3.1/all")
      .then((resp) => resp.json())
      // .then((resp) => console.log(resp))
      .then((name) => {
        setInformacao(name);
      });
  }

  useEffect(() => {
    pegandoInformacao();
  }, []);

  return (
    <Container>
      <Info>
        <Voltar>
          <Link to="/">
            <h4>Voltar</h4>
          </Link>
        </Voltar>
      </Info>
      {informacao?.map((name, index) => (
      <ContainerPais key={index}>
        <img src={name.flags.png} alt="" />
        <Centro>
          <Name>{id}</Name>
          <Coluna>
            <Lista1>
              <li>Nativo: <span>{name.name.official}</span></li>
              <li>População: <span>{name.population}</span></li>
              <li>Região: <span>{name.region}</span></li>
              <li>Sub Região: <span>{name.subregion}</span></li>
              <li>Capital: <span>{name.capital}</span></li>
            </Lista1>
            <Lista2>
              <li>Domínio de nível superior: <span>{name.tld}</span></li>
              <li>Moedas: <span>{name.tld}</span></li>
              <li>Línguas: <span>{name.name.languages}</span></li>
            </Lista2>
          </Coluna>
          <Front>
            <li>Países Fronteiriços: {name.tld}</li>
          </Front>
        </Centro>
      
      </ContainerPais>
      ))}
    </Container>

  );
}
