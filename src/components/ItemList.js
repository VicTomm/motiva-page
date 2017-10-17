import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startSetSecretarias } from '../actions/actions';


class ItemList extends Component {
    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (
            <ul>
            {this.props.items.map((item) => (
                <li key={item.id}>
                    {item.content.imagePath}
                </li>
            ))}
        </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(startSetSecretarias())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);