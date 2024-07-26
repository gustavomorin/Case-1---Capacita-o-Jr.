// import React from 'react';

// export function Controle() {
//     return (
//         <section className="controle">
//             <div className="fileira">
//                 <div className="doisitens">
//                     <img src="src\assets\barra1.jpeg" alt="" className="foto" />
//                     <h2 className="descricaoproduto">Bio Cookie Black</h2>
//                 </div>
//                 <div className="doisescritos">
//                     <h1 className="tipo">ESTOQUE</h1>
//                     <h2 className="itemcerto">32 Uni.</h2>
//                 </div>
//                 <div className="doisescritos">
//                     <h1 className="tipo">Valor</h1>
//                     <h2 className="itemcerto">R$ 15</h2>
//                 </div>
//                 <div className="doisescritos">
//                     <h1 className="tipo">N° PEDIDOS</h1>
//                     <h2 className="itemcerto">22</h2>
//                 </div>
//                 <button class="btn-default">
//                     ALTERAR/ADCIONAR
//                 </button>
//             </div>
//             <div className="fileira">
//                 <div className="doisitens">
//                     <img src="src\assets\barra1.jpeg" alt="" className="foto" />
//                     <h2 className="descricaoproduto">Bio Cookie Black</h2>
//                 </div>
//                 <div className="doisescritos">
//                     <h1 className="tipo">ESTOQUE</h1>
//                     <h2 className="itemcerto">32 Uni.</h2>
//                 </div>
//                 <div className="doisescritos">
//                     <h1 className="tipo">Valor</h1>
//                     <h2 className="itemcerto">R$ 15</h2>
//                 </div>
//                 <div className="doisescritos">
//                     <h1 className="tipo">N° PEDIDOS</h1>
//                     <h2 className="itemcerto">22</h2>
//                 </div>
//                 <button class="btn-default">
//                     ALTERAR/ADCIONAR
//                 </button>
//             </div>
//             <div className="fileira">
//                 <div className="doisitens">
//                     <img src="src\assets\barra1.jpeg" alt="" className="foto" />
//                     <h2 className="descricaoproduto">Bio Cookie Black</h2>
//                 </div>
//                 <div className="doisescritos">
//                     <h1 className="tipo">ESTOQUE</h1>
//                     <h2 className="itemcerto">32 Uni.</h2>
//                 </div>
//                 <div className="doisescritos">
//                     <h1 className="tipo">Valor</h1>
//                     <h2 className="itemcerto">R$ 15</h2>
//                 </div>
//                 <div className="doisescritos">
//                     <h1 className="tipo">N° PEDIDOS</h1>
//                     <h2 className="itemcerto">22</h2>
//                 </div>
//                 <button class="btn-default">
//                     ALTERAR/ADCIONAR
//                 </button>
//             </div>
//             <div className="fileira">
//                 <div className="doisitens">
//                     <img src="src\assets\barra1.jpeg" alt="" className="foto" />
//                     <h2 className="descricaoproduto">Bio Cookie Black</h2>
//                 </div>
//                 <div className="doisescritos">
//                     <h1 className="tipo">ESTOQUE</h1>
//                     <h2 className="itemcerto">32 Uni.</h2>
//                 </div>
//                 <div className="doisescritos">
//                     <h1 className="tipo">Valor</h1>
//                     <h2 className="itemcerto">R$ 15</h2>
//                 </div>
//                 <div className="doisescritos">
//                     <h1 className="tipo">N° PEDIDOS</h1>
//                     <h2 className="itemcerto">22</h2>
//                 </div>
//                 <button class="btn-default">
//                     ALTERAR/ADCIONAR
//                 </button>
//             </div>
//         </section>
//     )
//  }

// import React, { useState } from 'react';
// import './controle.css'; // Certifique-se de que seu CSS esteja importado

// export function Controle() {
//     // Cria um estado para cada item com a quantidade e estoque iniciais
//     const [itens, setItens] = useState([
//         { id: 1, descricao: 'Bio Cookie Black', estoque: 32, quantidade: 0 },
//         { id: 2, descricao: 'Bio Cookie Black', estoque: 12, quantidade: 0 },
//         { id: 3, descricao: 'Bio Cookie Black', estoque: 2, quantidade: 0 },
//         { id: 4, descricao: 'Bio Cookie Black', estoque: 20, quantidade: 0 }
//     ]);

//     const aumentarQuantidade = (id) => {
//         setItens(itens.map(item =>
//             item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
//         ));
//     };

//     const diminuirQuantidade = (id) => {
//         setItens(itens.map(item =>
//             item.id === id ? { ...item, quantidade: item.quantidade - 1 } : item
//         ));
//     };

//     const adicionarAoEstoque = (id) => {
//         setItens(itens.map(item =>
//             item.id === id ? { ...item, estoque: item.estoque + item.quantidade } : item
//         ));
//     };

//     return (
//         <section className="controle">
//             {itens.map(item => (
//                 <div className="fileira" key={item.id}>
//                     <div className="doisitens">
//                         <img src="src/assets/barra1.jpeg" alt="" className="foto" />
//                         <h2 className="descricaoproduto">{item.descricao}</h2>
//                     </div>
//                     <div className="doisescritos">
//                         <h1 className="tipo">ESTOQUE</h1>
//                         <h2 className="itemcerto">{item.estoque} Uni.</h2>
//                     </div>
//                     <div className="doisescritos">
//                         <h1 className="tipo">Valor</h1>
//                         <h2 className="itemcerto">R$ 15</h2>
//                     </div>
//                     <div className="doisescritos">
//                         <h1 className="tipo">N° PEDIDOS</h1>
//                         <h2 className="itemcerto">22</h2>
//                     </div>
//                     <div className="controle-quantidade-e-botao">
//                         <div className="controle-quantidade">
//                             <button className="btn-quantidade" onClick={() => diminuirQuantidade(item.id)}>-</button>
//                             <span className="quantidade">{item.quantidade}</span>
//                             <button className="btn-quantidade" onClick={() => aumentarQuantidade(item.id)}>+</button>
//                         </div>
//                         <button className="btn-default" onClick={() => adicionarAoEstoque(item.id)}>
//                             ALTERAR/ADICIONAR
//                         </button>
//                     </div>
//                 </div>
//             ))}
//         </section>
//     );
// }

import React, { useState } from 'react';
import './controle.css';

export function Controle() {
    // Cria um estado para cada item com a quantidade, estoque iniciais e URL da imagem
    const [itens, setItens] = useState([
        { id: 1, descricao: 'Bio Cookie Black', estoque: 32, quantidade: 0, imagem: 'src/assets/barra1.jpeg' },
        { id: 2, descricao: 'Caixa Mista', estoque: 12, quantidade: 0, imagem: 'src/assets/caixa mista.jpeg' },
        { id: 3, descricao: 'Bio Cookie Green', estoque: 2, quantidade: 0, imagem: 'src/assets/cookie veggie.webp' },
        { id: 4, descricao: 'Bio Chocolate', estoque: 20, quantidade: 0, imagem: 'src/assets/chocolate.webp' }
    ]);

    const aumentarQuantidade = (id) => {
        setItens(itens.map(item =>
            item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
        ));
    };

    const diminuirQuantidade = (id) => {
        setItens(itens.map(item =>
            item.id === id ? { ...item, quantidade: item.quantidade - 1 } : item
        ));
    };

    const adicionarAoEstoque = (id) => {
        setItens(itens.map(item =>
            item.id === id ? { ...item, estoque: item.estoque + item.quantidade, quantidade: 0 } : item
        ));
    };

    const alterarImagem = (id, novaImagem) => {
        setItens(itens.map(item =>
            item.id === id ? { ...item, imagem: novaImagem } : item
        ));
    };

    return (
        <section className="controle">
            {itens.map(item => (
                <div className="fileira" key={item.id}>
                    <div className="doisitens">
                        <img src={item.imagem} alt={item.descricao} className="foto" />
                        <h2 className="descricaoproduto">{item.descricao}</h2>
                        
                    </div>
                    <div className="doisescritos">
                        <h1 className="tipo">ESTOQUE</h1>
                        <h2 className="itemcerto">{item.estoque} Uni.</h2>
                    </div>
                    <div className="doisescritos">
                        <h1 className="tipo">Valor</h1>
                        <h2 className="itemcerto">R$ 15</h2>
                    </div>
                    <div className="doisescritos">
                        <h1 className="tipo">N° PEDIDOS</h1>
                        <h2 className="itemcerto">22</h2>
                    </div>
                    <div className="controle-quantidade-e-botao">
                        <div className="controle-quantidade">
                            <button className="btn-quantidade" onClick={() => diminuirQuantidade(item.id)}>-</button>
                            <span className="quantidade">{item.quantidade}</span>
                            <button className="btn-quantidade" onClick={() => aumentarQuantidade(item.id)}>+</button>
                        </div>
                        <button className="btn-default" onClick={() => adicionarAoEstoque(item.id)}>
                            ALTERAR/ADICIONAR
                        </button>
                    </div>
                </div>
            ))}
        </section>
    );
}

