import React from 'react';


export function Footer() {
    return(
        <footer>
        <div id="linha-agendar5"></div>
        <div id="footer_content">
            <div id="footer_contacts">
                <h1>
                    <i class="fa-solid fa-house-chimney-medical" id="nav_logo">BioNutri</i>
                </h1>
                <p>Transformando cada pele em sua </p>
                <p>melhor versão. Sua jornada para </p>
                <p>uma pele saúdavel começa conosco.</p>
                <p class="endereco">Rua Aleixo Garcia, 75</p>
                <p class="socialmedia">Nos siga nas redes sociais</p>
                <div id="footer_social_media">

                    <a href="#" class="footer-link" id="facebook">
                        <i class="fa-brands fa-facebook"></i>
                    </a>

                    <a href="#" class="footer-link" id="instagram">
                        <i class="fa-brands fa-instagram"></i>
                    </a>

                    <a href="#" class="footer-link" id="x">
                        <i class="fa-brands fa-x-twitter"></i>
                    </a>

                    <a href="#" class="footer-link" id="pinterest">
                        <i class="fa-brands fa-pinterest"></i>
                    </a>

                    <a href="#" class="footer-link" id="instagram">
                        <i class="fa-brands fa-youtube"></i>
                    </a>
                </div>
            </div>

            <ul class="footer-list">
                <li>
                    <h3>Sobre Nós</h3>
                </li>
                <li>
                    <a href="" class="footer-link">História</a>
                </li>
                <li>
                    <a href="" class="footer-link">Valores</a>
                </li>
                <li>
                    <a href="" class="footer-link">Blog</a>
                </li>
            </ul>

            <ul class="footer-list">
                <li>
                    <h3>Suporte</h3>
                </li>
                <li>
                    <a href="" class="footer-link">FAQ's</a>
                </li>
                <li>
                    <a href="" class="footer-link">Ajuda</a>
                </li>
                <li>
                    <a href="" class="footer-link">Nos Contate</a>
                </li>
            </ul>

            <ul class="footer-list">
                <li>
                    <h3>Legal</h3>
                </li>
                <li>
                    <a href="" class="footer-link">Politca Gov</a>
                </li>
                <li>
                    <a href="" class="footer-link">Ajuda</a>
                </li>
                <li>
                    <a href="" class="footer-link">Documentos</a>
                </li>
            </ul>                
               
        </div>

        <div id="linha-contato"></div>
        <div id="footer_copyright">
            <p>@2024 Clínica. Todos os direitos reservados.</p>
            <div id="direita">
                <p>Termos & Acordos</p>
                <p>Política de Privacidade</p>
            </div>
        </div>

    </footer>

    )
}