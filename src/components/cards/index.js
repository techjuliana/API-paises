import { Card, Container, Titulo, Informacao } from "./styled";
import React from "react";
// import {Container} from "@ui/system"
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
export default function Cards({ pais, img, populacao, regiao, capital }) {
  return (
    <div>
      <Container>
        <Grid item xs={4}>
          <Card>
            <Link to={`/pais?text=${pais}`}>
              <img src={img} alt="" />
            </Link>
            <Titulo>{pais}</Titulo>
            <Informacao>
              <h5>População: {populacao}</h5>
              <h5>Região: {regiao}</h5>
              <h5>Capital: {capital}</h5>
            </Informacao>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <Link to={`/pais?text=${pais}`}>
              <img src={img} alt="" />
            </Link>
            <Titulo>{pais}</Titulo>
            <Informacao>
              <h5>População: {populacao}</h5>
              <h5>Região: {regiao}</h5>
              <h5>Capital: {capital}</h5>
            </Informacao>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <Link to={`/pais?text=${pais}`}>
              <img src={img} alt="" />
            </Link>
            <Titulo>{pais}</Titulo>
            <Informacao>
              <h5>População: {populacao}</h5>
              <h5>Região: {regiao}</h5>
              <h5>Capital: {capital}</h5>
            </Informacao>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <Link to={`/pais?text=${pais}`}>
              <img src={img} alt="" />
            </Link>
            <Titulo>{pais}</Titulo>
            <Informacao>
              <h5>População: {populacao}</h5>
              <h5>Região: {regiao}</h5>
              <h5>Capital: {capital}</h5>
            </Informacao>
          </Card>
        </Grid>
      </Container>
    </div>
  );
}
