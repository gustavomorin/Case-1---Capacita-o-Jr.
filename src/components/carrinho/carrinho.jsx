// import React from 'react';
// import "./carrinho.css"

// export function Carrinho() {
//     return (
//         <section className="carrinho">
//             <div className="esquerdacarrinho">
//                 <div className="logoesquerda">
//                     <img src="src\assets\logo png bionutri.png" alt="" class="logo"></img>
//                     <h1 className="nomeprincipal">BIONUTRI</h1>
//                 </div>
//                 <h2 className="caminho">Carrinho  Frete  Pagamento</h2>
//                 <input type="text" placeholder='País/Região'/>
//                 <input type="text" placeholder='CPF/CNPJ'/>
//                 <div className="tresinputs">
//                     <input type="text" placeholder='Nome'/>
//                     <input type="text" placeholder='Sobrenome'/>
//                     <input type="text" placeholder='Telefone'/>
//                 </div>
//                 <div className="doisinputs">
//                     <input type="text" placeholder='CEP'/>
//                     <input type="text" placeholder='Rua'/>
//                 </div>
//                 <div className="tresinputs">
//                     <input type="text" placeholder='Número'/>
//                     <input type="text" placeholder='Complemento'/>
//                     <input type="text" placeholder='Bairro'/>
//                 </div>
//                 <div className="doisinputs">
//                     <input type="text" placeholder='Cidade'/>
//                     <input type="text" placeholder='Estado'/>
//                 </div>
//                 <div className="barrafinal">
//                     <p className="voltar">Voltar as compras</p>
//                     <button class="btn-default">
//                         Continuar com  frete
//                     </button>
//                 </div>
//             </div>
//             <div className="direitocarrinho">
//                 <div className="margem">
//                     <div className="fileiracarrinho">
//                         <img src="src\assets\barra1.jpeg" alt="" className="imagemprod" />
//                         <h2 className="textocarrinho">Bio Cookie Black</h2>
//                         <h2 className="precocarrinho">R$ 12</h2>
//                     </div>
//                     <div className="fileiracarrinho">
//                         <img src="src\assets\barra1.jpeg" alt="" className="imagemprod" />
//                         <h2 className="textocarrinho">Bio Cookie Black</h2>
//                         <h2 className="precocarrinho">R$ 12</h2>
//                     </div>
//                     <div className="linhacarrinho1"></div>
//                 </div>
//                 <div className="desconto">
//                     <input type="text" placeholder='Código de Desconto'/>
//                     <button class="btn-default">
//                         Aplicar
//                     </button>
//                 </div>
//                 <div className="linhacarrinho2"></div>
//                 <div className="subtotal">
//                     <h2 className="sub">Subtotal</h2>
//                     <h2 className="precosub">R$ 515,58</h2>
//                 </div>
//                 <div className="subtotal">
//                     <h2 className="sub">Subtotal</h2>
//                     <h2 className="precosub">R$ 515,58</h2>
//                 </div>
//                 <div className="linhacarrinho3"></div>
//                 <div className="subtotal">
//                     <h2 className="sub">Total</h2>
//                     <h2 className="precosub">R$ 515,58</h2>
//                 </div>
//             </div>
//         </section>
//     )
//  }
///////////////////////////////////////////////////////////
import React, { useState } from 'react';
import "./carrinho.css";
import { useNavigate } from 'react-router-dom';

export function Carrinho() {
    const [cep, setCep] = useState("");
    const [rua, setRua] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");

    const handleCepChange = (e) => {
        const newCep = e.target.value;
        setCep(newCep);

        // Verifica se o CEP tem 8 dígitos
        if (newCep.length === 8 && /^[0-9]+$/.test(newCep)) {
            fetch(`https://viacep.com.br/ws/${newCep}/json/`)
                .then((response) => response.json())
                .then((data) => {
                    if (data.erro) {
                        alert("CEP não encontrado.");
                        setRua("");
                        setBairro("");
                        setCidade("");
                        setEstado("");
                    } else {
                        setRua(data.logradouro || "");
                        setBairro(data.bairro || "");
                        setCidade(data.localidade || "");
                        setEstado(data.uf || ""); // Adicionando o estado
                    }
                })
                .catch((error) => {
                    console.error("Houve um erro ao buscar o CEP: ", error);
                });
        }
    };

    let navigate = useNavigate()
    return (
        <section className="carrinho">
            <div className="esquerdacarrinho">
                <div className="logoesquerda">
                    <img src="src/assets/logo png bionutri.png" alt="" className="logo" onClick = {()=> navigate("/pagina2")}/>
                    <h1 className="nomeprincipal" onClick = {()=> navigate("/pagina2")}>BIONUTRI</h1>
                </div>
                <h2 className="caminho"><i className="negrito">Carrinho</i> {">"} Frete {">"} Pagamento</h2>
                <input type="text" placeholder='País/Região' />
                <input type="text" placeholder='CPF/CNPJ' />
                <div className="tresinputs">
                    <input type="text" placeholder='Nome' />
                    <input type="text" placeholder='Sobrenome' />
                    <input type="text" placeholder='Telefone' />
                </div>
                <div className="doisinputs">
                    <input
                        type="text"
                        placeholder='CEP "XXXXXXXX"'
                        value={cep}
                        onChange={handleCepChange}
                    />
                    <input
                        type="text"
                        placeholder='Rua'
                        value={rua}
                        onChange={(e) => setRua(e.target.value)}
                    />
                </div>
                <div className="tresinputs">
                    <input
                        type="text"
                        placeholder='Número'
                    />
                    <input
                        type="text"
                        placeholder='Complemento'
                    />
                    <input
                        type="text"
                        placeholder='Bairro'
                        value={bairro}
                        onChange={(e) => setBairro(e.target.value)}
                    />
                </div>
                <div className="doisinputs">
                    <input
                        type="text"
                        placeholder='Cidade'
                        value={cidade}
                        onChange={(e) => setCidade(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder='Estado'
                        value={estado}
                        onChange={(e) => setEstado(e.target.value)}
                    />
                </div>
                <div className="barrafinal">
                    <p className="voltar" onClick = {()=> navigate("/hello")}>{"<"} Voltar as compras</p>
                    <button className="btn-default" onClick = {()=> navigate("/frete")}>
                        Continuar com frete
                    </button>
                </div>
            </div>
            <div className="direitocarrinho">
                <div className="margem">
                    <div className="fileiracarrinho">
                        <img src="src\assets\chocolate.webp" alt="" className="imagemprod" />
                        <h2 className="textocarrinho">Bio Chocolate</h2>
                        <h2 className="precocarrinho">R$ 15</h2>
                    </div>
                    <div className="fileiracarrinho">
                        <img src="src\assets\redvelvet.webp" alt="" className="imagemprod" />
                        <h2 className="textocarrinho">Bio Cookie Velvet</h2>
                        <h2 className="precocarrinho">R$ 180</h2>
                    </div>
                    <div className="linhacarrinho1"></div>
                </div>
                <div className="desconto">
                    <input type="text" placeholder='Código de Desconto' />
                    <button className="btn-default">
                        Aplicar
                    </button>
                </div>
                <div className="linhacarrinho2"></div>
                <div className="subtotal">
                    <h2 className="sub">Subtotal</h2>
                    <h2 className="precosub">R$ 195</h2>
                </div>
                <div className="subtotal">
                    <h2 className="sub">Frete</h2>
                    <h2 className="precosub">Calculado na próxima etapa</h2>
                </div>
                <div className="linhacarrinho3"></div>
                <div className="subtotal">
                    <h2 className="sub">Total</h2>
                    <h2 className="precosub">R$ 195</h2>
                </div>
            </div>
        </section>
    );
}

