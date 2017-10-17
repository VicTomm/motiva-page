import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Footer = () => (
    <footer>
        <h3 className="heading7">Encuentranos en: </h3>
        <ul>
            <li><a href="#"><i className="fa fa-facebook social-icon facebook" aria-hidden="true"></i></a></li>
            <li><a href="#"><i className="fa fa-twitter social-icon twitter" aria-hidden="true"></i></a></li>
            <li><a href="#"><i className="fa fa-youtube-play social-icon youtube" aria-hidden="true"></i></a></li>
            <li><a href="#"><i className="fa fa-phone phone" aria-hidden="true"></i></a></li>
            <li><a href="#"><i className="fa fa-envelope envelope" aria-hidden="true"></i></a></li>
        </ul>
    </footer>
);

export default Footer;