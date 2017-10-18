import React from 'react';

const ContactPage = () => (
    <div className="container">
        <section className="hero">
            <div className="hero-body motiva-secretaria">
                <div className="has-text-centered">
                    <h1 className="title">
                        Contactanos
                </h1>
                    <h2 className="subtitle">
                        Tienes algo que decir, nosotrxs te escuchamos
                </h2>
                    <a href="#" className="button btn-facebook is-large is-outlined"><span className="icon is-medium"><i className="fa fa-facebook facebook"></i></span></a>
                    <a href="#" className="button btn-twitter is-large is-outlined"><span className="icon is-medium"><i className="fa fa-twitter twitter"></i></span></a>
                    <a href="#" className="button btn-phone is-large is-outlined"><span className="icon is-medium"><i className="fa fa-phone phone"></i></span></a>
                    <a href="#" className="button btn-mail is-large is-outlined"><span className="icon is-medium"><i className="fa fa-envelope mail"></i></span></a>
                </div>
            </div>
        </section>
    </div>
);

export default ContactPage;