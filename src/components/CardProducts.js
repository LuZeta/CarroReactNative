import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CardProducts = ({ data, index }) => {
    console.log('data ', index)
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
        <Text>{'data.name'}</Text>
        // </TouchableOpacity>
    )
}

export default CardProducts

const styles = StyleSheet.create({})