import React from 'react';
import { connect } from 'react-redux';
import { startSetSecretarias } from '../actions/actions';
import SecretariaItem from './SecretariaItem'

class NosotrosPage extends React.Component {
    render() {
        return (
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
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
    };
};

export default connect(mapStateToProps)(NosotrosPage);