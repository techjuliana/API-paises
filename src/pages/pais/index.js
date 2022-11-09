import { Link } from "react-router-dom";
export default function Pais () {
  return (
    <div>Ao clicar no pais ele vai mostrar informacoes dele
    
    <button>
              <Link to={`/user-list`}>
               <h3>Voltar</h3>
              </Link>
            </button>
    </div>
  )
  }