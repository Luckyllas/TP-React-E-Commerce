import React from 'react';
import '../css/Footer.css';
import logo from "../image/logo.png";


const Footer = () => {
    return (
        <footer id='pie'>
            <img src={logo} id='logoFooter'/>
            <ul id='menuPie'>
                <li><a href='#'>Item1</a></li>
                <li><a href='#'>Item2</a></li>
                <li><a href='#'>Item3</a></li>
                <li><a href='#'>Item4</a></li>
            </ul>
            <h3 id='contact'><a href='#'>Contact Us</a></h3>
        </footer>
    );
}

export default Footer;
