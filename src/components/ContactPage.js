import React from 'react';

const ContactPage = () => (
    <section className="hero">
        <h1>Contactanos</h1>
        <h3>Tienes algo que decir, nosotrxs te escuchamos</h3>
        <ul className="social-container">
            <li className="social-container-item"><a href="#" className="icon icon-facebook"><div className="fa fa-facebook"></div><i className="fa fa-facebook"></i></a></li>
            <li className="social-container-item"><a href="#" className="icon icon-twitter"><div className="fa fa-twitter"></div><i className="fa fa-twitter"></i></a></li>
            <li className="social-container-item"><a href="#" className="icon icon-phone"><div className="fa fa-phone"></div><i className="fa fa-phone"></i></a></li>
            <li className="social-container-item"><a href="#" className="icon icon-mail"><div className="fa fa-envelope"></div><i className="fa fa-envelope"></i></a></li>
        </ul>
    </section>
);

export default ContactPage;