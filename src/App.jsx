import {Route, Routes} from "react-router-dom"
import { Landing_Page } from "./components/Landing_Page/landingpage"
import { Landing_Page2 } from "./components/Landing_Page2/header2.jsx"
import "./components/fonts.css"
import { Funcionarios } from "./funcionario/funcionario.jsx"
import { Carrinho } from "./components/carrinho/carrinho.jsx"
import { Frete } from "./components/frete/frete.jsx"
import { Pagamento } from "./components/pagamento/pagamento.jsx"
import { Login } from "./components/login/login.jsx"
import { Register } from "./components/register/register.jsx"
import { Landing_Page3 } from "./components/pagina2/landingpage.jsx"


function App() {
  return (
    <div>
        <Routes>
          <Route path="/" Component={Landing_Page}/>
          <Route path="/hello" Component={Landing_Page2}/>
          <Route path="/funcio" Component={Funcionarios}/>
          <Route path="/carrinho" Component={Carrinho}/>
          <Route path="/frete" Component={Frete}/>
          <Route path="/pagamento" Component={Pagamento}/>
          <Route path="/login" Component={Login}/>
          <Route path="/register" Component={Register}/>
          <Route path="/pagina2" Component={Landing_Page3}/>
        </Routes>
    </div>
   
  )
}

export default App
