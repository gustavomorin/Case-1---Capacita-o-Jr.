import { useNavigate } from "react-router-dom";
import { registerUserApi } from "./api/register-user-api";
import "./wrapperregister.css"
import React, { useState } from 'react';
import { AiFillCloseCircle } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { CiDatabase } from "react-icons/ci";
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";

export function Wrapperregister(){
       let [registerInfos, setRegisterInfos] = useState({
        nome:"",
        cep: "",
        celular: "",
        email: "",
        senha: ""
       })

       let navigate = useNavigate()
       const registerUser = async () => {
        for (let k in registerInfos){
            if (!registerInfos[k]){
                console.log(k, registerInfos)
                return
            }
        }

        let {response, data} = await registerUserApi(registerInfos)
        console.log('dasdsa')
        if (response.ok){
            console.log("User cadastrado com sucesso")
            navigate("/pagina2")
        }
       }
     return(
        <section className="wrapper2">
            <div class="form-box login">
            <h2>Registro</h2>
            <div action="#">
                <div class="input-box">
                    <span class="icon"><CgProfile />
                    </span>
                    <input type="email" required onChange={(ev) => setRegisterInfos(prev => {
                        return{...prev, nome: ev.target.value}
                    })}/>
                    <label>Nome</label>
                </div>
                <div class="input-box">
                    <span class="icon"><CiDatabase />
                    </span>
                    <input type="email" required onChange={(ev) => setRegisterInfos(prev => {
                        return{...prev, cep: ev.target.value}
                    })}/>
                    <label>CEP</label>
                </div>
                <div class="input-box">
                    <span class="icon"><FaPhone />
                    </span>
                    <input type="email" required onChange={(ev) => setRegisterInfos(prev => {
                        return{...prev, celular: ev.target.value}
                    })}/>
                    <label>Celular</label>
                </div>
                <div class="input-box">
                    <span class="icon"><IoMdMail /></span>
                    <input type="email" required onChange={(ev) => setRegisterInfos(prev => {
                        return{...prev, email: ev.target.value}
                    })}/>
                    <label>E-mail</label>
                </div>
                <div class="input-box">
                    <span class="icon"><RiLockPasswordFill /></span>
                    <input type="password" required onChange={(ev) => setRegisterInfos(prev => {
                        return{...prev, senha: ev.target.value}
                    })}/>
                    <label>Senha</label>
                </div>

                <button  class="btn" onClick={() => registerUser()}>Registrar</button>
                <div class="login-register">
                    <p>Já tem conta?<a href="#" class="register-link" onClick = {()=> navigate("/login")}>Login</a></p>
                </div>
            </div>
        </div>
        </section>
     )
     }