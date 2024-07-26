import { Header2 } from "./landingpage2.jsx"
import { Home2 } from "./home2.jsx"
import "./home2.css"
import "../../App.css"
import "./fonts.css"
import { Produtos2 } from "./produtos2.jsx"
import "./produtos2.css"
import "./footer2.css"
import { Footer2 } from "./footer2.jsx"
import {MarqueeBar} from "./MarqueeBar.jsx"

function Landing_Page2() {
    return (
      <div className="gradiente">
        <Header2 />
        <Home2 />
        <Produtos2 />
        <Footer2 />
        <MarqueeBar />

      </div>
     
    )
  }
  
  export {Landing_Page2}