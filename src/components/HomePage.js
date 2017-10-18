import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const HomePage = () => (
    <ReactCSSTransitionGroup
        transitionName="motiva"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
        <div className="container">
            <section className="hero">
                <div className="hero-body">
                    <div className="has-text-centered">
                        <h1 className="title">
                            <img src="/images/logoSmall.png" alt="Motiva" />
                        </h1>
                        <h2 className="subtitle">
                            Queremos que recuperes la sonrisa. No abandonemos lo que es nuestro: <br /> <span className="strongMotiva">El poder de decidir el rumbo de México.</span>
                        </h2>
                    </div>
                </div>
            </section>
        </div>
    </ReactCSSTransitionGroup>
);

export default HomePage;