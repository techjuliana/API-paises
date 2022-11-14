import { Container, Centralizar, Pesquisa, Selecione } from "./styled";

// import { RiSearchLine } from "react-icons/ri";
export default function Filtros() {
  return (
    <Container>
      <Centralizar>
     
        <Pesquisa placeholder="Procurar por pais..." >
        {/* <img src={RiSearchLine} alt="" /> */}
        </Pesquisa>
      
        
        
        <Selecione
          onChange={(e) => {
            // setFilterParam(e.target.value);
          }}
          className="Selecione"
        >
          <option value="All">Filtrar por região</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </Selecione>
        {/* <span className="focus"></span> */}
      </Centralizar>
    </Container>
  );
}
