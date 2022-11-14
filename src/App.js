import React, { useEffect,useState } from "react";
import { Routes, Route} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { lightTheme, darkTheme } from "./theme/theme";
import Home from "./pages/home";
import Pais from "./pages/pais";
import Header from "./components/header";
import Detalhes from "./components/detalhes";
import { Card } from "./components/cards/styled";

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
     
      <Routes> 
        <Route exact path="/" element={<Home />} />
        <Route path="/pais" element={<Pais />} />
      </Routes>

        <Header funcao={themeToggler} />
       
        {informacao?.map((name, index) => (
          <Detalhes
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
          <Card
            key={index}
            id={name.name.common}
            img={name.flags.png}
            pais={name.name.common}
            populacao={name.population}
            regiao={name.region}
            capital={name.capital}
          />
        ))}
     
    </ThemeProvider>
  );
}

export default App;
