import React from 'react';

export function News(){
     return(
        <section className="secaonews">
            <shape className="cardnews"></shape>
            <div className="divisao">
                <img src="src\assets\sem fundo.png" alt="" className="leque" />
                <div className="ladodireito">
                    <h2 className="subtitulosecaonews">Inscreva-se no nosso canal de notícias!</h2>
                    <p className="newsparagrafo">Fique atualizado com as últimas novidades em nutrição, lançamentos de produtos, dicas de saúde e receitas. Descubra como a BioNutri está revolucionando a alimentação saudável!</p>
                    <input type="text" placeholder="E-mail"/>
                </div>
            </div>
        </section>
        
     )
    
    }