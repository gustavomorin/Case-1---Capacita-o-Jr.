import { Header3 } from "./header3.jsx"
import "./header3.css"
import {Home} from "./home.jsx"
import "./home.css"
import {Controle} from "./controle.jsx"
import "./controle.css"
import {Resultados} from "./resultados.jsx"
import "./resultados.css"
import {Footer3} from "./footer3.jsx"
import "./footer3.css"

function Funcionarios() {
    return (
      <div className="gradiente">
        <Header3 />
        <Home />
        <Controle />
        <Resultados />
        <Footer3 />
      </div>
     
    )
  }
  
  export {Funcionarios}