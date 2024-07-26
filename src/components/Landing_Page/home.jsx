// import React from 'react';

// export function Home(){
//      return(
//         <main id="content">
//         <section id="home">
//             <div id="cta">
//                 <h1 class="title">Nutrição saúdavel para uma vida plena.</h1>
//                 <p class="description">Alimentos nutritivos para energizar o seu corpo e potencializar seu dia</p>
//                 <div id="cta_button">
//                     <a href="#consulta" class="btn-default">Comprar</a>
//                 </div>
//             </div>
//             <div id="banner">
//                 <img src="src\assets\imagem home.jpeg" alt="mulher"></img>
//             </div>
//         </section>
//     </main>
//     );
//  }

import React, { useState, useEffect } from 'react';
import './home.css'; // Certifique-se de que o caminho para o CSS está correto
import { useNavigate } from 'react-router-dom';


export function Home() {
    const [currentText, setCurrentText] = useState('plena.');
    const texts = ['plena.', 'feliz.'];
    let navigate = useNavigate()

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentText(prevText => {
                const nextIndex = (texts.indexOf(prevText) + 1) % texts.length;
                return texts[nextIndex];
            });
        }, 4000); // Troca a cada 4 segundos

        return () => clearInterval(intervalId); // Limpa o intervalo quando o componente desmonta
    }, [texts]);

    return (
        <main id="content">
            <section id="home">
                <div id="cta">
                    <h1 className="title typing-container">
                        Nutrição saudável para uma vida 
                        <span className="typing-effect">
                            {currentText}
                        </span>
                    </h1>
                    <p className="description">Alimentos nutritivos para energizar o seu corpo e potencializar seu dia</p>
                    <div id="cta_button">
                        <a href="#consulta" className="btn-default" onClick = {()=> navigate("/login")}>Comprar</a>
                    </div>
                </div>
                <div id="banner">
                    <img src="src/assets/imagem home.jpeg" alt="mulher" />
                </div>
            </section>
        </main>
    );
}