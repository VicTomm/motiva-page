import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => (
    <header>
        <h2>
            <Link className="header__title" to="/">
                <img src="/images/logoHeader.png" alt="Motiva" />
            </Link>
        </h2>
        <nav>
            <li><NavLink to="/nosotrxs" activeClassName="is-active">Nosotrxs</NavLink></li>
            <li><NavLink to="/contacto" activeClassName="is-active">Contacto</NavLink></li>
        </nav>
    </header>
);

export default Header;