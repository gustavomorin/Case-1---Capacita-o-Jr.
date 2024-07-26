
import "./LoginRegister.css"
import React from 'react';
import { useState } from 'react';
import { UserLoginApi } from "./api/user-login-api";
import { useNavigate } from "react-router-dom";
import { IoMdMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";



export function Wrapperlogin(){
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let navigate = useNavigate()

    const userLogin = async () => {
        if (!email || !password) return

        let {data, response} = await UserLoginApi(email, password)

        if (response.ok){
            if (data.is_employees){
                navigate("/funcio")
            }else{
                navigate("/pagina2")
            }
        }
    }

     return(
        <section className="wrapper">
            <div class="form-box login">
            <h2>Login</h2>
            <div action="#">
                <div class="input-box">
                    <span class="icon"><IoMdMail />
                    </span>
                    <input type="email" required onChange={(ev) => setEmail(ev.target.value)}/>
                    <label>E-mail</label>
                </div>
                <div class="input-box">
                    <span class="icon"><RiLockPasswordFill />
                    </span>
                    <input type="password" required onChange={(ev) => setPassword(ev.target.value)}/>
                    <label>Senha</label>
                </div>
                <div class="remember-forgot">
                    <label><a href="quinta.html"></a></label>
                    <a href="#">Esqueci minha senha</a>
                </div>
                <button type="submit" class="btn" onClick={() => userLogin()}>Login</button>
                <div class="login-register">
                    <p>Não tem conta?<a href="#" class="register-link" onClick = {()=> navigate("/register")}>Registre-se</a></p>
                </div>
            </div>
        </div>
        </section>
     )
      }