// import React, { useState } from 'react';
// import './LoginRegister.css';

// const Login = () => {
//   const [isLogin, setIsLogin] = useState(true);

//   const toggleForm = () => {
//     setIsLogin(!isLogin);
//   };

//   return (
//     <div className="popup">
//       <div className="popup-inner">
//         <span className="close-btn" onClick={() => console.log('Close popup')}>X</span>
//         {isLogin ? (
//           <div className="form-box login">
//             <h2>Login</h2>
//             <form>
//               <div className="input-box">
//                 <input type="email" required />
//                 <label>E-mail</label>
//                 <span className="icon"><ion-icon name="mail-outline"></ion-icon></span>
//               </div>
//               <div className="input-box">
//                 <input type="password" required />
//                 <label>Senha</label>
//                 <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
//               </div>
//               <div className="remember-forgot">
//                 <a href="#">Esqueci minha senha?</a>
//               </div>
//               <button type="submit" className="btn">Login</button>
//               <div className="login-register">
//                 <p>Não tem conta? <a href="#" onClick={toggleForm}>Registre-se</a></p>
//               </div>
//             </form>
//           </div>
//         ) : (
//           <div className="form-box register">
//             <h2>Registro</h2>
//             <form>
//               <div className="input-box">
//                 <input type="text" required />
//                 <label>Nome</label>
//                 <span className="icon"><ion-icon name="person-outline"></ion-icon></span>
//               </div>
//               <div className="input-box">
//                 <input type="text" required />
//                 <label>CEP</label>
//                 <span className="icon"><ion-icon name="pencil-outline"></ion-icon></span>
//               </div>
//               <div className="input-box">
//                 <input type="text" required />
//                 <label>Celular</label>
//                 <span className="icon"><ion-icon name="call-outline"></ion-icon></span>
//               </div>
//               <div className="input-box">
//                 <input type="text" required />
//                 <label>CPF</label>
//                 <span className="icon"><ion-icon name="card-outline"></ion-icon></span>
//               </div>
//               <div className="input-box">
//                 <input type="email" required />
//                 <label>E-mail</label>
//                 <span className="icon"><ion-icon name="mail-outline"></ion-icon></span>
//               </div>
//               <div className="input-box">
//                 <input type="password" required />
//                 <label>Senha</label>
//                 <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
//               </div>
//               <button type="submit" className="btn">Registrar-se</button>
//               <div className="login-register">
//                 <p>Já tem conta? <a href="#" onClick={toggleForm}>Login</a></p>
//               </div>
//             </form>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export {Login};
import { Landing_Page } from "./landingpage"
import {  Wrapperlogin } from "./wrapperlogin"

function Login() {
    return (
      <div className="gradiente">
        <Landing_Page />
        <Wrapperlogin />
      </div>
     
    )
  }
  
  export {Login}
  