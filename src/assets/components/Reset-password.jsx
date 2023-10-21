import React from "react";
import "../css/Reset-password.css";

const ResetPassword = () => {
  return (
    <div className="reset-container">
      <h1>Cambiar Contraseña</h1>
      <div className="aviso">
        Vamos a enviar un email para que puedas cambiar tu contraseña.
      </div>
      <label className="label">Email</label>
      <input className="input" type="email"></input>
      <button className="button">Enviar Email</button>
    </div>
  );
};

export default ResetPassword;
