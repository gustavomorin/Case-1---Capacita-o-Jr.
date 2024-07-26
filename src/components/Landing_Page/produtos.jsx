import React from 'react';


export function Produtos(){
     return(
        <section id="blog">
            <h1 className="titulosecaoprodutos">NOSSOS PRODUTOS</h1>
            <h2 className="subtitulosecaoprodutos">Nutrição, Sabor e Qualidade em Cada Mordida</h2>
            <div class="formato">
                <div id="bloco">
                    <img src="src\assets\prod1.jpeg" alt="estrias"  className='imagemp'></img>
                    <div class="textos">
                        <h3 class="titulonoticia">Barrinhas de Proteína BioNutri: Energia para Seu Dia a Dia</h3>
                        <p class="conteudonoticia">Nossas Barrinhas de Proteína BioNutri são a escolha perfeita para quem busca uma alimentação saudável, prática e saborosa. Feitas com ingredientes naturais de alta qualidade, nossas barrinhas são ricas em proteínas, fibras e nutrientes essenciais para manter seu corpo energizado e satisfeito ao longo do dia.</p>
                    </div>
                </div>
                <div id="bloco">
                    <img src="src\assets\cookie.jpeg" alt="envelhecimento" className='imagemp'></img>
                    <div class="textos">
                        <h3 class="titulonoticia">Balas de Gelatina com Creatina BioNutri: Desempenho e Sabor</h3>
                        <p class="conteudonoticia">As Balas de Gelatina com Creatina BioNutri são a escolha ideal para quem busca uma forma prática e saborosa de melhorar o desempenho físico. Feitas com ingredientes de alta qualidade e enriquecidas com creatina, nossas balas são perfeitas para apoiar o ganho de força, aumentar a energia e acelerar a recuperação muscular.</p>
                    </div>
                </div>
                <div id="bloco">
                    <img src="src\assets\cleanlabel.jpeg" alt="flacidez" className='imagemp'></img>
                    <div class="textos">
                        <h3 class="titulonoticia">Barrinhas de Proteína Veganas BioNutri: Feitas para Você</h3>
                        <p class="conteudonoticia">Nossas Barrinhas de Proteína Veganas BioNutri são a opção perfeita para quem busca uma alimentação saudável e sustentável. Feitas com ingredientes 100% naturais e de origem vegetal, nossas barrinhas são ricas em proteínas, fibras e nutrientes essenciais para manter seu corpo energizado e satisfeito ao longo do dia, sem comprometer o meio ambiente.</p>
                    </div>
                </div>
            </div>
        </section>
     )
    }