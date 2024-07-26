import React from 'react';

export function Servicos(){
     return(
        <section className="serv">
            <h1 className="titulosecaoservicos">O QUE SERVIMOS?</h1>
            <h2 className="subtitulosecaoservicos">Seu Parceiro de Entrega de Alimentos Preferido</h2>
            <div className="servicos">
                <div className="servico">
                    <img src="src\assets\image.png" alt="" className="servicoscard" />
                    <h3 className="titulocard">Fácil de Pedir</h3>
                    <p className="textocard">É necessário apenas alguns passos para realizar a compra</p>
                </div>
                <div className="servico">
                    <img src="src\assets\img2.jpeg" alt="" className="servicoscard" />
                    <h3 className="titulocard">Delivery Rápido</h3>
                    <p className="textocard">Sempre a tempo ou até mesmo antes do esperado</p>
                </div>
                <div className="servico">
                    <img src="src\assets\img3.jpeg" alt="" className="servicoscard" />
                    <h3 className="titulocard">Melhor Qualidade</h3>
                    <p className="textocard">Para nós, qualidade é o que mais importa</p>
                </div>
            </div>
        </section>
     )
    }