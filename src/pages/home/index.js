import { useState, useEffect } from "react";
import Card from "./../../components/cards";
import { Link } from "react-router-dom";
// import api from "../../services/api";
import {
  Grid,
  ErroMensagemPais,
  Pesquisa,
  Selecione,
  ContainerFiltro,
  CentralizarFiltro,
} from "./styled";

export default function Home() {
  const [paisCarregado, setPaisCarregado] = useState(false); //seu estado inicial é falso
  const [paises, setPaises] = useState([]); //inicia com uma lista vazia
  const [paisesFiltrados, setPaisesFiltrados] = useState([]);
  const [buscarPais, setBuscarPais] = useState("");
  const [selecionarRegiao, setSelecionarRegiao] = useState("");
  
  const listaRegioesAPI = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const pegandoDadosAPI = () => {
    // api.fetch(`/all`)
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((results) => {
        setPaisCarregado(true);
        setPaises(results);
        // console.log(results)
      });
  };

  useEffect(() => {
    pegandoDadosAPI();
  }, []);

  const handleChangeProcurandoPais = (evento) => {
    setBuscarPais(evento.target.value);
  };
  const handleChangeSelecionandoRegiao = (evento) => {
    setSelecionarRegiao(evento.target.value);
  };

  useEffect(() => {
    const result = paises.filter(
      (pais) =>
        (!buscarPais ||
          pais.name.common.toLowerCase().includes(buscarPais.toLowerCase())) &&
        (!selecionarRegiao || pais.region === selecionarRegiao)
    );
    setPaisesFiltrados(result);
    console.log(result);
  }, [buscarPais, paises, selecionarRegiao]);

  return (
    <div>
      <ContainerFiltro>
        <CentralizarFiltro>
      
            <Pesquisa
              type="text"
              placeholder="Procurar por pais..."
              disabled={paisCarregado ? false : true}
              value={buscarPais}
              onChange={handleChangeProcurandoPais}
            />
      
          <div>
            <Selecione
              disabled={paisCarregado ? false : true}
              onChange={handleChangeSelecionandoRegiao} 
            >
              <option value="">Todos os Paises</option>
              {listaRegioesAPI.map((region) => (
                <option value={region} key={region}>
                  {region}
                </option>
              ))}
            </Selecione>
          </div>
          
        </CentralizarFiltro>
      </ContainerFiltro>

      <Grid>
        {paisesFiltrados.length > 0 ? (
          paisesFiltrados.map((item, index) => (
            <div key={index}>
              <Link to={`/pais/${item.name.common}`}>
                <Card
                  img={item.flags.png}
                  nome={item.name.common}
                  populacao={item.population.toLocaleString()}
                  regiao={item.region}
                  capital={item.capital}
                />
              </Link>
            </div>
          ))
        ) : (
          <div>
            <div className={` ${paisCarregado ? "" : "hidden"}`}>
              <ErroMensagemPais>Pais não encontrado :(</ErroMensagemPais>
            </div>
          </div>
        )}
      </Grid>
    </div>
  );
}
