// export function Users(){
//     let name = "Henrique"
//     let

//     return{
//         <div>
//             <p>{name}</p>
//         </div>
//     }
// }

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";



export function Header() {
    let navigate = useNavigate()
    return (
        <header>
        <img src="src\assets\logo png bionutri.png" alt="" class="logo" onClick = {()=> navigate("/")}></img>
        <nav id="navbar">
            <div id="nav_logo" onClick = {()=> navigate("/")}>Bionutri</div>
            <ul id="nav_list">
                <li class="nav-item">
                    <a href="#home">Home</a>
                </li>
                <li class="nav-item">
                    <a href="#sobre">Sobre</a>
                </li>
                <li class="nav-item">
                    <a href="#servicos">Serviços</a>
                </li>
                <li class="nav-item">
                    <a href="#blog">Blog</a>
                </li>
                <li class="nav-item">
                    <a href="#footer_content">Contato</a>
                </li>
            </ul>
            <div className="carrinhocompras">
                <i className='iconecarrinho' onClick = {()=> navigate("/carrinho")}><MdOutlineShoppingCart /></i>
                <p class="maria"><a href="">Maria Silva</a></p>
            </div>

            <button class="mobile_btn">
                <i class="fa-solid fa-bars"></i>
            </button>
        </nav>

        <div class="mobile_menu">
            <ul id="mobile_nav_list">
                <li class="nav-item">
                    <a href="#home">Home</a>
                </li>
                <li class="nav-item">
                    <a href="#sobre">Sobre</a>
                </li>
                <li class="nav-item">
                    <a href="#servicos">Serviços</a>
                </li>
                <li class="nav-item">
                    <a href="#blog">Blog</a>
                </li>
                <li class="nav-item">
                    <a href="#footer_content">Contato</a>
                </li>
            </ul>

            <button class="btn-default" onClick = {()=> navigate("/hello")}>
                Login
            </button>

        </div>
    </header>
    );
}
