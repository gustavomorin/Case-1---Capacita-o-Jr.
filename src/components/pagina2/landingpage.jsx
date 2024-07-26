import "../../App.css"
import { Header } from "./header.jsx"
import "./fonts.css"
import "./header.css"
import { Home } from "./home.jsx"
import "./home.css"
import "./servicos.css"
import { Servicos } from "./servicos.jsx"
import "./produtos.css"
import { Produtos } from "./produtos.jsx"
import { Feedback } from "./feedback.jsx"
import "./feedback.css"
import { News } from "./news.jsx"
import "./news.css"
import "./footer.css"
import { Footer } from "./footer.jsx"

function Landing_Page3() {
  return (
    <div className="gradiente">
      <Header />
      <Home />
      <Servicos />
      <Produtos />
      <Feedback />
      <News />
      <Footer />
    </div>
   
  )
}

export {Landing_Page3}
