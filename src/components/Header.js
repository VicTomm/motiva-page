import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            isActive: false
        }
    }

    handleBurgerMenu = () => {
        this.setState((prevState) => ({
            isActive: !prevState.isActive
        }));
    };

    render() {
        return (
            <div className="hero-head">
                <header className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                            <Link className="navbar-item" to="/">
                                <img src="/images/logoHeader.png" alt="Motiva" width="112" height="28" />
                            </Link>
                            <span onClick={this.handleBurgerMenu} className={"navbar-burger burger " + (this.state.isActive ? 'is-active' : '')} data-target="navbarMenuHeroC">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div id="navbarMenuHeroC" className={"navbar-menu " + (this.state.isActive ? 'is-active' : '')}>
                            <div className="navbar-end">
                                <NavLink onClick={this.handleBurgerMenu} to="/nosotrxs" className="navbar-item" activeClassName="is-active">Nosotrxs</NavLink>
                                <NavLink onClick={this.handleBurgerMenu} to="/contacto" className="navbar-item" activeClassName="is-active">Contacto</NavLink>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;