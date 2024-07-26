// import React from 'react';
// import "./fonts.css"

// export function Produtos2() {
//     return (
//         <section className="produtos2">
//             <div className="trescolunas">
//                 <div className="primeira">
//                     <img src="src\assets\barra1.jpeg" alt="" className="imagemprod" />
//                     <h3 className="descr">Bio Cookie Black</h3>
//                     <p className="preco">R$ 15</p>
//                     <button class="btn-default">
//                         ADICIONAR AO CARRINHO
//                     </button>
//                 </div>
//                 <div className="primeira">
//                     <img src="src\assets\barra1.jpeg" alt="" className="imagemprod" />
//                     <h3 className="descr">Bio Cookie Black</h3>
//                     <p className="preco">R$ 15</p>
//                     <button class="btn-default">
//                         ADICIONAR AO CARRINHO
//                     </button>
//                 </div>
//                 <div className="primeira">
//                     <img src="src\assets\barra1.jpeg" alt="" className="imagemprod" />
//                     <h3 className="descr">Bio Cookie Black</h3>
//                     <p className="preco">R$ 15</p>
//                     <button class="btn-default">
//                         ADICIONAR AO CARRINHO
//                     </button>
//                 </div>
//             </div>
//             <div className="trescolunas">
//                 <div className="primeira">
//                     <img src="src\assets\barra1.jpeg" alt="" className="imagemprod" />
//                     <h3 className="descr">Bio Cookie Black</h3>
//                     <p className="preco">R$ 15</p>
//                     <button class="btn-default">
//                         ADICIONAR AO CARRINHO
//                     </button>
//                 </div>
//                 <div className="primeira">
//                     <img src="src\assets\barra1.jpeg" alt="" className="imagemprod" />
//                     <h3 className="descr">Bio Cookie Black</h3>
//                     <p className="preco">R$ 15</p>
//                     <button class="btn-default">
//                         ADICIONAR AO CARRINHO
//                     </button>
//                 </div>
//                 <div className="primeira">
//                     <img src="src\assets\barra1.jpeg" alt="" className="imagemprod" />
//                     <h3 className="descr">Bio Cookie Black</h3>
//                     <p className="preco">R$ 15</p>
//                     <button class="btn-default">
//                         ADICIONAR AO CARRINHO
//                     </button>
//                 </div>
//             </div>
//             <div className="trescolunas">
//                 <div className="primeira">
//                     <img src="src\assets\barra1.jpeg" alt="" className="imagemprod" />
//                     <h3 className="descr">Bio Cookie Black</h3>
//                     <p className="preco">R$ 15</p>
//                     <button class="btn-default">
//                         ADICIONAR AO CARRINHO
//                     </button>
//                 </div>
//                 <div className="primeira">
//                     <img src="src\assets\barra1.jpeg" alt="" className="imagemprod" />
//                     <h3 className="descr">Bio Cookie Black</h3>
//                     <p className="preco">R$ 15</p>
//                     <button class="btn-default">
//                         ADICIONAR AO CARRINHO
//                     </button>
//                 </div>
//                 <div className="primeira">
//                     <img src="src\assets\barra1.jpeg" alt="" className="imagemprod" />
//                     <h3 className="descr">Bio Cookie Black</h3>
//                     <p className="preco">R$ 15</p>
//                     <button class="btn-default">
//                         ADICIONAR AO CARRINHO
//                     </button>
//                 </div>
//             </div>
//             <div className="trescolunas">
//                 <div className="primeira">
//                     <img src="src\assets\barra1.jpeg" alt="" className="imagemprod" />
//                     <h3 className="descr">Bio Cookie Black</h3>
//                     <p className="preco">R$ 15</p>
//                     <button class="btn-default">
//                         ADICIONAR AO CARRINHO
//                     </button>
//                 </div>
//                 <div className="primeira">
//                     <img src="src\assets\barra1.jpeg" alt="" className="imagemprod" />
//                     <h3 className="descr">Bio Cookie Black</h3>
//                     <p className="preco">R$ 15</p>
//                     <button class="btn-default">
//                         ADICIONAR AO CARRINHO
//                     </button>
//                 </div>
//                 <div className="primeira">
//                     <img src="src\assets\barra1.jpeg" alt="" className="imagemprod" />
//                     <h3 className="descr">Bio Cookie Black</h3>
//                     <p className="preco">R$ 15</p>
//                     <button class="btn-default">
//                         ADICIONAR AO CARRINHO
//                     </button>
//                 </div>
//             </div>
//         </section>
//     )
//  }
/////////////////////////////////////////////////////
import React, { useState } from 'react';
import './fonts.css';

export function Produtos2() {
    // Inicializa o estado com quantidades individuais para cada produto
    const initialQuantities = {
        produto1: 0,
        produto2: 0,
        produto3: 0,
        produto4: 0,
        produto5: 0,
        produto6: 0,
        produto7: 0,
        produto8: 0,
        produto9: 0,
        produto10: 0,
        produto11: 0,
        produto12: 0,
        produto13: 0,
        produto14: 0,
        produto15: 0,
        produto16: 0,
    };

    const [quantities, setQuantities] = useState(initialQuantities);

    // Funções para aumentar e diminuir a quantidade de um produto específico
    const increaseQuantity = (produtoId) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [produtoId]: prevQuantities[produtoId] + 1
        }));
    };

    const decreaseQuantity = (produtoId) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [produtoId]: prevQuantities[produtoId] > 1 ? prevQuantities[produtoId] - 1 : 1
        }));
    };

    // Array de produtos
    const produtos = [
        { id: 'produto1', image: 'src/assets/barra1.jpeg', description: 'Bio Cookie Black', price: 'R$ 15' },
        { id: 'produto2', image: 'src/assets/avelabranco.jpeg', description: 'Bio Cookie White', price: 'R$ 18' },
        { id: 'produto3', image: 'src/assets/barra chocolate branco.jpeg', description: 'Bio Chocolate Branco', price: 'R$ 13' },
        { id: 'produto4', image: 'src/assets/chocolate crocante.jpeg', description: 'Bio Chocolate Crocante', price: 'R$ 15' },
        { id: 'produto5', image: 'src/assets/caixa mista.jpeg', description: 'Bio Caixa Mista', price: 'R$ 212' },
        { id: 'produto6', image: 'src/assets/redvelvet.webp', description: 'Bio Cookiee Velvet', price: 'R$ 180' },
        { id: 'produto7', image: 'src/assets/cookie.jpeg', description: 'Bio Cookiee Variado', price: 'R$ 144' },
        { id: 'produto8', image: 'src/assets/pacote cookie.webp', description: 'Bio Cookiee', price: 'R$ 101' },
        { id: 'produto9', image: 'src/assets/chocolate.webp', description: 'Bio Chocolate', price: 'R$ 15' },
        { id: 'produto10', image: 'src/assets/banana.webp', description: 'Bio Banana', price: 'R$ 10' },
        { id: 'produto11', image: 'src/assets/cookiescream.webp', description: 'Bio Cookies&Cream', price: 'R$ 21' },
        { id: 'produto12', image: 'src/assets/caixabrownie.webp', description: 'Bio Barra Brownie', price: 'R$ 220' },
        { id: 'produto13', image: 'src/assets/oatmeal.webp', description: 'Bio Cookie Peanut Butter', price: 'R$ 150' },
        { id: 'produto14', image: 'src/assets/oatmeal2.webp', description: 'Bio Cookie Oatmeal', price: 'R$ 152' },
        { id: 'produto15', image: 'src/assets/cookiee coco.webp', description: 'Bio Cookie Coconut', price: 'R$ 111' },
        { id: 'produto16', image: 'src/assets/cookie veggie.webp', description: 'Bio Cookie Green', price: 'R$ 182' },
    ];

    // Renderiza o componente com base no estado das quantidades
    return (
        <section className="produtos2">
            <div className="trescolunas">
                {produtos.slice(0, 4).map(produto => (
                    <div className="primeira" key={produto.id}>
                        <img src={produto.image} alt={produto.description} className="imagemprod" />
                        <h3 className="descr">{produto.description}</h3>
                        <p className="preco">{produto.price}</p>
                        <div className="quantity-control">
                            <button className="quantity-button" onClick={() => decreaseQuantity(produto.id)}>-</button>
                            <span className="quantity-display">{quantities[produto.id]}</span>
                            <button className="quantity-button" onClick={() => increaseQuantity(produto.id)}>+</button>
                        </div>
                        <button className="btn-default">
                            ADICIONAR AO CARRINHO
                        </button>
                    </div>
                ))}
            </div>
            <div className="trescolunas">
                {produtos.slice(4, 8).map(produto => (
                    <div className="primeira" key={produto.id}>
                        <img src={produto.image} alt={produto.description} className="imagemprod" />
                        <h3 className="descr">{produto.description}</h3>
                        <p className="preco">{produto.price}</p>
                        <div className="quantity-control">
                            <button className="quantity-button" onClick={() => decreaseQuantity(produto.id)}>-</button>
                            <span className="quantity-display">{quantities[produto.id]}</span>
                            <button className="quantity-button" onClick={() => increaseQuantity(produto.id)}>+</button>
                        </div>
                        <button className="btn-default">
                            ADICIONAR AO CARRINHO
                        </button>
                    </div>
                ))}
            </div>
            <div className="trescolunas">
                {produtos.slice(8, 12).map(produto => (
                    <div className="primeira" key={produto.id}>
                        <img src={produto.image} alt={produto.description} className="imagemprod" />
                        <h3 className="descr">{produto.description}</h3>
                        <p className="preco">{produto.price}</p>
                        <div className="quantity-control">
                            <button className="quantity-button" onClick={() => decreaseQuantity(produto.id)}>-</button>
                            <span className="quantity-display">{quantities[produto.id]}</span>
                            <button className="quantity-button" onClick={() => increaseQuantity(produto.id)}>+</button>
                        </div>
                        <button className="btn-default">
                            ADICIONAR AO CARRINHO
                        </button>
                    </div>
                ))}
            </div>
            <div className="trescolunas">
                {produtos.slice(12).map(produto => (
                    <div className="primeira" key={produto.id}>
                        <img src={produto.image} alt={produto.description} className="imagemprod" />
                        <h3 className="descr">{produto.description}</h3>
                        <p className="preco">{produto.price}</p>
                        <div className="quantity-control">
                            <button className="quantity-button" onClick={() => decreaseQuantity(produto.id)}>-</button>
                            <span className="quantity-display">{quantities[produto.id]}</span>
                            <button className="quantity-button" onClick={() => increaseQuantity(produto.id)}>+</button>
                        </div>
                        <button className="btn-default">
                            ADICIONAR AO CARRINHO
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

