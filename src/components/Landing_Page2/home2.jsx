//  import React from 'react';
//  import "./fonts.css"

//  export function Home2() {
//      return (
//          <section className="home2">
//              <shape className="cardhome2"></shape>
//              <div className="tres">
//                  <p className="esq">A partir de duas barras de proteína você ganha desconto na terceira!</p>
//                  <img src="src\assets\duas barras.png" alt="" className="duasbarras" />
//                  <div className="dois">
//                      <p className="di">30% OFF NA PRÓXIMA</p>
//                      <button class="btn-default">
//                          COMPRE AGORA
//                      </button>
//                  </div>
//              </div>
//          </section>
//      )
//   }

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./fonts.css";

export function Home2() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
  
    return (
      <section className="home2">
        <Slider {...settings}>
          <div className="slide">
            <div className="cardhome2 laranja"></div>
            <div className="tres">
              <p className="esq">A partir de duas barras de proteína você ganha desconto na terceira!</p>
              <img src="src/assets/duas barras.png" alt="Duas barras de proteína" className="duasbarras" />
              <div className="dois">
                <p className="di">30% OFF NA PRÓXIMA</p>
                <button className="btn-default">COMPRE AGORA</button>
              </div>
            </div>
          </div>
          <div className="slide">
            <img src="src\assets\barra5.png" alt="" className="banner" />
          </div>
          {/* Adicione mais slides conforme necessário */}
        </Slider>
      </section>
    );
  }
  