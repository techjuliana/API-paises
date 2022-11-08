export default function Filtros () {
  return (
    <div>
     <input placeholder="Procurar por pais..."></input>

<select
  onChange={(e) => {
  // setFilterParam(e.target.value);
   }}
   className="custom-select">
    <option value="All">Filtrar por região</option>
    <option value="Africa">Africa</option>
    <option value="Americas">America</option>
    <option value="Asia">Asia</option>
    <option value="Europe">Europe</option>
    <option value="Oceania">Oceania</option>
    </select>
    <span className="focus"></span>
    </div>
   
  )
  }