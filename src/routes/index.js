import { Route, BrowserRouter as Router  } from "react-router-dom";
import Home from "../pages/home";
import Pais from "../pages/pais";

export default function Routes() {
  return (
    <Router>
      <>
        <Route exact path="/" element={Home} />
        <Route path="/pais" element={Pais} />
      </>
    </Router>
  );
}
