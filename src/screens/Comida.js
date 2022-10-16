import { Text, View } from 'react-native'
import React, { Component } from 'react'
import {comida} from '../components/Data'
import Products from '../components/Products'

class Comida extends Component {
    render () {
        return (
            <View>
                <Products products={comida} onPress={this.props.addItemToCart} />
            </View>
        );
    }
}


export default Comida;