import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CardProducts = (props) => {
    const { id, name, price } = props
    console.log('data ', id, name, price)

    return (
        // <TouchableOpacity
        //     key={data.id}
        //     onPress={() => {
        //         console.log('press')
        //     }}
        //     style={{
        //         width: '100%',
        //         height: 100,
        //         marginVertical: 6,
        //         flexDirection: 'row',
        //         alignItems: 'center',
        //     }}>
        <Text > {name}</Text >
        // </TouchableOpacity>
    )
}

export default CardProducts

const styles = StyleSheet.create({})