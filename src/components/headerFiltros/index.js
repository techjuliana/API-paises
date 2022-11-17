import Busca from "../busca";
import Select from "../select";
import { Container, Centralizar} from "./styled";

export default function HeaderFiltros({ pesquisarPais }) {
  return (
    <Container>
      <Centralizar>
      <Busca/>
      <Select/>
      </Centralizar>
    </Container>
  );
}
