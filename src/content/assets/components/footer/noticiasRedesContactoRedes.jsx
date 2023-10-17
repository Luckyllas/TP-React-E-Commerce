import React from 'react';
import instagram from '../../image/Footer/instagram.webp';
import facebook from '../../image/Footer/facebook.webp';
import mail from '../../image/Footer/eMail.webp';

const NoticiasRedesContactoRedes = () => {
    return (
        <div id='margenesContacto'>
            <h4>redes sociales</h4>
            <img id='imagenCard' src={instagram} />
            <img id='imgFace' src={facebook} />
            <img id='imagenCard' src={mail} />
        </div>
    );
}

export default NoticiasRedesContactoRedes;
