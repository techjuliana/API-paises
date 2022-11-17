import { Selecione } from "./styled";

export default function Select({ api }) {
  
  return (
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
     
     
  );
}
