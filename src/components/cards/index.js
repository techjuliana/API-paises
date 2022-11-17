import { Card, Container, Titulo, Informacao } from "./styled";
import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
export default function Cards() {
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
    <div>
      <Container>
  <Grid container>
  {informacao?.map((name, index) => (
    <Grid item xs={3} key={index}>
      <Card key={index} >
          <Link to={`/pais/${name.name.common}`}>
            <img src={name.flags.png} alt="" />
          </Link>
          <Titulo>{name.name.common}</Titulo>
          <Informacao>
            <li>
              População: <span>{name.population}</span>
            </li>
            <li>
              Região: <span>{name.region}</span>
            </li>
            <li>
              Capital: <span>{name.capital}</span>
            </li>
          </Informacao>
          </Card> 
    </Grid>
  ))}
</Grid> 
      </Container>
    </div>
  );
}
