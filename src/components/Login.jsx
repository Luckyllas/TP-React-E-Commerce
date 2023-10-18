import React from "react";
import "../assets/css/Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <h1>Iniciar Sesion</h1>
      <label className="label">Email</label>
      <input className="input" required></input>
      <label className="label">Contraseña</label>
      <input className="input" type="password" required></input>
      <p>¿Olvidaste tu contraseña?</p>
      <button className="button">Iniciar Sesion</button>
      <p>¿No tenés cuenta?</p>
      <a>Crear Cuenta</a>
    </div>
  );
};

export default Login;
