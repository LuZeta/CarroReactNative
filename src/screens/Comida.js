import { Text, View } from 'react-native';
import React, { Component } from 'react';
import {comida} from '../components/Data';
import Products from '../components/Products';
import {connect} from 'react-redux';

class Comida extends Component {
    render () {
        return (
            <View>
                <Products products={comida} onPress={this.props.addItemToCart} />
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product })
    }
}

export default connect(null, mapDispatchToProps)(Comida);

