import React from "react";
import "../css/Contacto.css";

const Contacto = () => {
  return (
    <div>
      <div>
        <h1>Contactanos</h1>
        <p>Completa el formulario de contacto</p>
      </div>
      <div>
        <form>
          <fieldset>
            <label for="nombre">
              Nombre: <input id="nombre" name="nombre" type="text" required />
            </label>
            <label for="telefono">
              Telefono:{" "}
              <input id="telefono" name="telefono" type="number" required />
            </label>
            <label for="email">
              Email: <input id="email" name="email" type="email" required />
            </label>
          </fieldset>
          <fieldset>
            <label for="bio">
              Mensaje:
              <textarea
                id="bio"
                name="bio"
                rows="3"
                cols="30"
                placeholder="Mensaje..."
              ></textarea>
            </label>
          </fieldset>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Contacto;