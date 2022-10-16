import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

class Products extends Component {

    renderProducts = (products) => {
        console.log(products)
        return products.map((item) => {
            return (
                <View>
                    <Button onPress={() => this.props.onPress(item)} title={item.name + " - " + item.price} />
                </View>
            )
        })
    }

    render() {
        return (
            <View>
                {this.renderProducts(this.props.products)}
            </View>
        );
    }
}
export default Products;