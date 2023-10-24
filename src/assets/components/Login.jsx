import React from "react";
import "../css/Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container">
      <h1>Iniciar Sesion</h1>
      <label className="label">Email</label>
      <input className="input" type="email" required></input>
      <label className="label">Contraseña</label>
      <input className="input" type="password" required></input>
      <div>
        <Link to="/Reset-password">¿Olvidaste tu contraseña?</Link>
      </div>
      <button className="button">Iniciar Sesion</button>
      <p>¿No tenés cuenta?</p>
      <div>
        <Link to="/Singin">Crear Cuenta</Link>
      </div>
    </div>
  );
};

export default Login;