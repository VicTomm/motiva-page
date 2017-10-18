import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="content has-text-centered">
                <h3 className="heading7">Encuentranos en: </h3>
                <a href="#"><i className="fa fa-facebook social-icon facebook" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-twitter social-icon twitter" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-youtube-play social-icon youtube" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-phone phone" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-envelope envelope" aria-hidden="true"></i></a>
            </div>
        </div>
    </footer>
);

export default Footer;