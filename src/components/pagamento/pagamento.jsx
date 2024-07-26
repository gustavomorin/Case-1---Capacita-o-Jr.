import React from 'react';
import "./pagamento.css"
import { useNavigate } from 'react-router-dom';
import { FaCreditCard } from "react-icons/fa";
import { MdOutlinePix } from "react-icons/md";
import { FaGooglePay } from "react-icons/fa";


export function Pagamento() {
    let navigate = useNavigate()
    return (
        <section className="carrinho">
            <div className="esquerdacarrinho">
                <div className="logoesquerda" onClick = {()=> navigate("/")}>
                    <img src="src\assets\logo png bionutri.png" alt="" class="logo"></img>
                    <h1 className="nomeprincipal" onClick = {()=> navigate("/")}>BIONUTRI</h1>
                </div>
                <h2 className="caminho">Carrinho {">"} Frete {">"} <i className="negrito">Pagamento</i></h2>
                <shape className="retangulofrete">
                    <p className="contato">Contato</p>
                    <p className="emaildela">mariasilva@gmail.com</p>
                    <p className="alterar" onClick = {()=> navigate("/carrinho")}>Alterar</p>
                </shape>
                <shape className="retangulofrete2">
                    <p className="enviarpara">Enviar Para</p>
                    <p className="end">Maria Silva, Rua Quatá 280, apto 41 - Bairro Vila Olímpia,
                    04546-041, São Paulo SP, Brasil</p>
                    <p className="alterar"  onClick = {()=> navigate("/carrinho")}>Alterar</p>
                </shape>
                <shape className="retangulofrete">
                    <p className="contato">Frete</p>
                    <p className="emaildela">Grátis</p>
                    <p className="alterar" onClick = {()=> navigate("/frete")}>Alterar</p>
                </shape>
                <h2 className="formadefrete">FORMA DE PAGAMENTO</h2>
                <shape className="retangulofrete">
                    <div className="pagar">
                    <FaCreditCard />
                    <p className="padrão">Cartão de Crédito</p>
                    </div>
                </shape>
                <shape className="retangulofrete">
                <div className="pagar">
                <MdOutlinePix />

                    <p className="padrão">PIX</p>
                    </div>
                </shape>
                <shape className="retangulofrete">
                    <div className="pagar">
                        <FaGooglePay />
                        <p className="padrão">Google Pay</p>
                    </div>
                </shape>
                <div className="barrafinal">
                    <p className="voltar"  onClick = {()=> navigate("/hello")}>{"<"}Voltar as compras</p>
                    <button class="btn-default">
                        Finalizar Pagamento
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
                    <input type="text" placeholder='Código de Desconto'/>
                    <button class="btn-default">
                        Aplicar
                    </button>
                </div>
                <div className="linhacarrinho2"></div>
                <div className="subtotal">
                    <h2 className="sub">Subtotal</h2>
                    <h2 className="precosub">R$ 515,58</h2>
                </div>
                <div className="subtotal">
                    <h2 className="sub">Frete</h2>
                    <h2 className="precosub">Grátis</h2>
                </div>
                <div className="linhacarrinho3"></div>
                <div className="subtotal">
                    <h2 className="sub">Total</h2>
                    <h2 className="precosub">R$ 515,58</h2>
                </div>
            </div>
            
        </section>
    ) 
}