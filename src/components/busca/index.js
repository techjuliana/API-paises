import { Pesquisa } from "./styled";

export default function Busca({ pesquisarPais }) {
  return (
   
        <Pesquisa
          type="text"
          onChange={(evento) => pesquisarPais(evento.target.value)}
          placeholder="Procurar por pais..."
        ></Pesquisa>
       

        
  );
}
