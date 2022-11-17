import Cards from "../../components/cards";
import Header from "../../components/header";
import { Cardst } from "./styled";
import HeaderFiltros from "../../components/headerFiltros";
export default function Home() {
  return (
    <div>
      <Header />
      <HeaderFiltros />
      <Cardst>
        <Cards />
      </Cardst>
    </div>
  );
}
