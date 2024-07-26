import React from 'react';

export function Produtos(){
     return(
        <section id="blog">
            <h1 className="titulosecaoprodutos">NOSSOS PRODUTOS</h1>
            <h2 className="subtitulosecaoprodutos">Nutrição, Sabor e Qualidade em Cada Mordida</h2>
            <div class="formato">
                <div id="bloco">
                    <img src="src\assets\prod1.jpeg" alt="estrias"></img>
                    <div class="textos">
                        <h3 class="titulonoticia">Barrinhas de Proteína BioNutri: Energia para Seu Dia a Dia</h3>
                        <p class="conteudonoticia">Nossas Barrinhas de Proteína BioNutri são a escolha perfeita para quem busca uma alimentação saudável, prática e saborosa. Feitas com ingredientes naturais de alta qualidade, nossas barrinhas são ricas em proteínas, fibras e nutrientes essenciais para manter seu corpo energizado e satisfeito ao longo do dia.</p>
                    </div>
                </div>
                <div id="bloco">
                    <img src="src\assets\cookie.jpeg" alt="envelhecimento"></img>
                    <div class="textos">
                        <h3 class="titulonoticia">Cookies Proteicos BioNutri: Sabor Surpreendente, Energia Instantânea</h3>
                        <p class="conteudonoticia">Descubra os Cookies Proteicos da BioNutri: deliciosos, nutritivos e perfeitos para o seu estilo de vida saudável. Com alta concentração de proteínas, ingredientes naturais, ricos em fibras e sem glúten, nossos cookies são ideais para um lanche rápido, pré ou pós-treino. Disponíveis em vários sabores irresistíveis, eles são a escolha certa para quem busca saúde e sabor.</p>
                    </div>
                </div>
                <div id="bloco">
                    <img src="src\assets\cleanlabel.jpeg" alt="flacidez"></img>
                    <div class="textos">
                        <h3 class="titulonoticia">Produtos Clean Label BioNutri: Transparência em Cada Ingrediente</h3>
                        <p class="conteudonoticia">Explore os Produtos Clean Label da BioNutri: alimentos feitos com ingredientes simples e naturais, sem aditivos artificiais. Perfeitos para quem busca uma alimentação mais saudável e transparente, nossos produtos são cuidadosamente formulados para manter a qualidade e o sabor genuíno.</p>
                    </div>
                </div>
            </div>
        </section>
     )
    }