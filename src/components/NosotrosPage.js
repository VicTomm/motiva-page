import React from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { startSetSecretarias } from '../actions/actions';
import SecretariaItem from './SecretariaItem'

class NosotrosPage extends React.Component {
    render() {
        return (
            <ReactCSSTransitionGroup
                transitionName="motiva"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={false}>
                <section className="section">
                    <div className="container has-text-centered">
                        <h1 className="title">Secretarías</h1>
                        <hr />
                        <div className="columns is-multiline is-desktop">
                            {
                                this.props.items.map((item) => (
                                    <SecretariaItem key={item.id} {...item} />
                                ))
                            }
                        </div>
                    </div>
                </section>
            </ReactCSSTransitionGroup>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
    };
};

export default connect(mapStateToProps)(NosotrosPage);