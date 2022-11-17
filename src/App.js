import React, {useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { lightTheme, darkTheme } from "./theme/theme";
import Home from "./pages/home";
import Pais from "./pages/pais";
import Header from "./components/header";

function App() {
  const [theme, setTheme] = useState("light");
  // const [informacao, setInformacao] = useState([]);

  // function pegandoInformacao() {
  //   fetch("https://restcountries.com/v3.1/all")
  //     .then((resp) => resp.json())
  //     // .then((resp) => console.log(resp))
  //     .then((name) => {
  //       setInformacao(name);
  //     });
  // }

  // useEffect(() => {
  //   pegandoInformacao();
  // }, []);

  //MUDAR TEMA

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/pais/:id" element={<Pais />} />
      </Routes>

      <Header funcao={themeToggler} />
      {/* <Select api={pegandoInformacao} />   */}

      {/* <Grid container>
        {informacao?.map((name, index) => (
          <Grid item xs={3} key={index}>
            <Cards
              key={index}
              id={name.name.common}
              img={name.flags.png}
              pais={name.name.common}
              populacao={name.population}
              regiao={name.region}
              capital={name.capital}
            />
          </Grid>
        ))}
      </Grid> */}

      {/* {detalhes?.map((name, id) => (
        <Detalhes
          key={id}
          img={name.flags.png}
          pais={name.name.common}
          populacao={name.population}
          regiao={name.region}
          capital={name.capital}
          subregiao={name.subregion}
          linguagem={name.name.languages}
          nativo={name.name.official}
          dominio={name.tld}
          front={name.tld}
          moeda={name.tld}
        />
      ))} */}
    </ThemeProvider>
  );
}
export default App;
