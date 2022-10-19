import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLOURS } from '../../constants/colors'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

const CardProducts = ({ setTotal, value }) => {
    // console.log('props ', props)
    const { id, name, cantidad, price, image } = value

    return (
        <TouchableOpacity style={styles.container}
            key={id}
            onPress={() => {
                console.log('press ', value);
            }}
        >
            <View style={styles.wrapper}>
                <Image style={styles.icon} source={image} />
            </View>
            <View style={styles.information}>
                <View>
                    <Text style={styles.title}>  {name} </Text>
                    <View style={styles.detail}>
                        <Text style={styles.price}> $ {price} </Text>
                        <Text> ($ {2000}) </Text>
                    </View>
                </View>
                <View style={styles.control}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <View style={styles.containerMinus}>
                            <MaterialCommunityIcons name="minus" style={styles.minus} />
                        </View>
                        <Text>{cantidad}</Text>
                        <View style={styles.containerPlus}>
                            <MaterialCommunityIcons name="plus" style={styles.plus} />
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => { }}>
                        <MaterialCommunityIcons style={styles.deleteButton} name="delete-outline" />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default CardProducts

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        marginVertical: 6,
        flexDirection: 'row',
        alignItems: 'center',
    },
    wrapper: {
        width: '30%',
        height: 100,
        padding: 14,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOURS.backgroundLight,
        borderRadius: 10,
        marginRight: 22,
    },
    icon: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    information: {
        flex: 1,
        height: '100%',
        justifyContent: 'space-around',
    },
    title: {
        fontSize: 14,
        maxWidth: '100%',
        color: COLOURS.black,
        fontWeight: '600',
        letterSpacing: 1,
    },
    detail: {
        marginTop: 4,
        flexDirection: 'row',
        alignItems: 'center',
        opacity: 0.6,
    },
    price: {
        fontSize: 14,
        fontWeight: '400',
        maxWidth: '85%',
        marginRight: 4,
    },
    control: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    containerMinus: {
        borderRadius: 100,
        marginRight: 20,
        padding: 4,
        borderWidth: 1,
        borderColor: COLOURS.backgroundMedium,
        opacity: 0.5,
    },
    containerPlus: {
        borderRadius: 100,
        marginLeft: 20,
        padding: 4,
        borderWidth: 1,
        borderColor: COLOURS.backgroundMedium,
        opacity: 0.5,
    },
    deleteButton: {
        fontSize: 16,
        color: COLOURS.backgroundDark,
        backgroundColor: COLOURS.backgroundLight,
        padding: 8,
        borderRadius: 100,
    },
    plus: {
        fontSize: 16,
        color: COLOURS.backgroundDark,
    },
    minus: {
        fontSize: 16,
        color: COLOURS.backgroundDark,
    }
})