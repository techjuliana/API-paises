import { useState, useEffect } from "react";
import Card from "./../../components/cards";
import { Link } from "react-router-dom";
import {
  Grid,
  ErroMensagemPais,
  Pesquisa,
  Selecione,
  ContainerFiltro,
  CentralizarFiltro,
} from "./styled";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectInput, setSelectInput] = useState("");
  const regionList = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((results) => {
        setIsLoaded(true);
        setItems(results);
        // console.log(results)
      });
  };
  const handleChangeInput = (e) => {
    setSearchInput(e.target.value);
  };
  const handleChangeSelect = (e) => {
    setSelectInput(e.target.value);
  };

  useEffect(() => {
    const result = items.filter(
      (item) =>
        (!searchInput ||
          item.name.common.toLowerCase().includes(searchInput.toLowerCase())) &&
        (!selectInput || item.region === selectInput)
    );
    setFilteredItems(result);
    console.log(result);
  }, [searchInput, items, selectInput]);

  return (
    <div>
      <ContainerFiltro>
        <CentralizarFiltro>
          <div className={isLoaded ? "form__search" : "form__search skeleton"}>
            <ion-icon name="search"></ion-icon>
            <Pesquisa
              type="text"
              placeholder="Search for a country"
              disabled={isLoaded ? false : true}
              value={searchInput}
              onChange={handleChangeInput}
            />
          </div>
          <div
            className={
              isLoaded
                ? "form__select-wrapper"
                : "form__select-wrapper skeleton"
            }
          >
            <Selecione
              disabled={isLoaded ? false : true}
              onChange={handleChangeSelect}
            >
              <option value="">All</option>
              {regionList.map((region) => (
                <option value={region} key={region}>
                  {region}
                </option>
              ))}
            </Selecione>
          </div>
        </CentralizarFiltro>
      </ContainerFiltro>

      <Grid>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <div key={index}>
              <Link to={`/pais/${item.name.common}`}>
                <Card
                  key={index}
                  img={item.flags.png}
                  nome={item.name.common}
                  populacao={item.population}
                  regiao={item.region}
                  capital={item.capital}
                />
              </Link>
            </div>
          ))
        ) : (
          <div>
            <div className={` ${isLoaded ? "" : "hidden"}`}>
              <ErroMensagemPais>Pais não encontrado :(</ErroMensagemPais>
            </div>
          </div>
        )}
      </Grid>
    </div>
  );
}
