import Cards from "../../components/cards";
import Filtros from "../../components/filtros";
import Header from "../../components/header";
import { Cardst } from "./styled";

export default function Home() {
  return (
    <div>
   
        <Header />
        <Filtros />
        <Cardst>
        <Cards />
        </Cardst>
    
    </div>
  );
}
