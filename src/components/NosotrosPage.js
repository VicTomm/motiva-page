import React from 'react';
import { connect } from 'react-redux';
import { startSetSecretarias } from '../actions/actions';
import SecretariaItem from './SecretariaItem'

class NosotrosPage extends React.Component {
    render() {
        console.log(this.props.items);
        return (
            <section className="nosotros">
                <h1 className="nosotros__title">Secretarías</h1>
                <hr />

                <ul className="grid">
                    {
                        this.props.items.map((item) => (
                            <SecretariaItem key={item.id} {...item} />
                        ))
                    }
                </ul>
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