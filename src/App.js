import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { lightTheme, darkTheme } from "./theme/theme";
import Home from "./pages/home";
import Header from "./components/header";
import { Container } from "./styled";
import Pais from "./pages/pais";
function App() {
  const [theme, setTheme] = useState("light");
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

  //MUDAR TEMA
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Container>
        <Header funcao={themeToggler} />

        {informacao?.map((name, index) => (
          <Pais
            key={index}
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
        ))}

        {informacao?.map((name, index) => (
          <Home
            key={index}
            id={name.name.common}
            img={name.flags.png}
            pais={name.name.common}
            populacao={name.population}
            regiao={name.region}
            capital={name.capital}
          />
        ))}
      </Container>
    </ThemeProvider>
  );
}

export default App;
