import React from 'react';

export function Feedback(){
     return(
        <section className="feedback">
            <div className="esquerda">
                <h1 className="titulosecaofeedback">O QUE FALAM SOBRE NÓS?</h1>
                <h2 className="subtitulosecaofeedback">O Que Nossos Clientes Pensam</h2>
                <p className="comentario">"As barrinhas de proteína da BioNutri são fantásticas! Ingredientes naturais, sabor delicioso e uma ótima variedade de opções. A entrega foi rápida e o atendimento ao cliente é excelente. Recomendo para quem busca uma alimentação saudável e prática. Com certeza comprarei novamente!"</p>
                <div className="cliente">
                    <img src="src\assets\foto mulher.jpeg" alt="" className="clientemulher" />
                    <div className="empresaria">
                        <p>Teresa Mendes</p>
                        <p className="cor">Empresária</p>
                        <p>estrelas</p>
                    </div>
                </div>
            </div>
            <img src="src\assets\feed1.jpeg" alt="" className="feedimage" />
            
        </section>
    )
     }