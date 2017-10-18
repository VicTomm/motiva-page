import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => (
    <div class="hero-head">
        <header class="navbar">
            <div class="container">
                <div class="navbar-brand">
                    <Link className="navbar-item" to="/">
                        <img src="/images/logoHeader.png" alt="Motiva" width="112" height="28" />
                    </Link>
                    <span class="navbar-burger burger" data-target="navbarMenuHeroC">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </div>
                <div id="navbarMenuHeroC" class="navbar-menu">
                    <div class="navbar-end">
                        <NavLink to="/nosotrxs" className="navbar-item" activeClassName="is-active">Nosotrxs</NavLink>
                        <NavLink to="/contacto" className="navbar-item" activeClassName="is-active">Contacto</NavLink>
                    </div>
                </div>
            </div>
        </header>
    </div>
);

export default Header;