import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Home(){
    let navigate = useNavigate()
     return(
        <main id="content">
        <section id="home">
            <div id="cta">
                <h1 class="title">Nutrição saudável para uma vida plena.</h1>
                <p class="description">Alimentos nutritivos para energizar o seu corpo e potencializar seu dia</p>
                <div id="cta_button" onClick = {()=> navigate("/hello")}>
                    <a href="#consulta" class="btn-default">Comprar</a>
                </div>
            </div>
            <div id="banner">
                <img src="src\assets\imagem home.jpeg" alt="mulher"></img>
            </div>
        </section>
    </main>
    );
 }