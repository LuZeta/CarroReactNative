import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLOURS } from '../../constants/colors'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

const CardProducts = (props) => {
    console.log('props ', props)
    const { id, name, cantidad, price, image } = props

    return (
        <TouchableOpacity
            key={id}
            onPress={() => {
                console.log('press')
            }}
            style={{
                width: '100%',
                height: 100,
                marginVertical: 6,
                flexDirection: 'row',
                alignItems: 'center',
            }}>
            <View
                style={{
                    width: '30%',
                    height: 100,
                    padding: 14,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: COLOURS.backgroundLight,
                    borderRadius: 10,
                    marginRight: 22,
                }}>
                <Image
                    source={image}
                    style={{
                        width: '100%',
                        height: '100%',
                        resizeMode: 'contain',
                    }}
                />
            </View>
            <View
                style={{
                    flex: 1,
                    height: '100%',
                    justifyContent: 'space-around',
                }}>
                <View style={{}}>
                    <Text
                        style={{
                            fontSize: 14,
                            maxWidth: '100%',
                            color: COLOURS.black,
                            fontWeight: '600',
                            letterSpacing: 1,
                        }}>
                        {name}
                    </Text>
                    <View
                        style={{
                            marginTop: 4,
                            flexDirection: 'row',
                            alignItems: 'center',
                            opacity: 0.6,
                        }}>
                        <Text
                            style={{
                                fontSize: 14,
                                fontWeight: '400',
                                maxWidth: '85%',
                                marginRight: 4,
                            }}>
                            $ {price}
                        </Text>
                        <Text>
                            ($ {2000})
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <View
                            style={{
                                borderRadius: 100,
                                marginRight: 20,
                                padding: 4,
                                borderWidth: 1,
                                borderColor: COLOURS.backgroundMedium,
                                opacity: 0.5,
                            }}>
                            <MaterialCommunityIcons
                                name="minus"
                                style={{
                                    fontSize: 16,
                                    color: COLOURS.backgroundDark,
                                }}
                            />
                        </View>
                        <Text>{cantidad}</Text>
                        <View
                            style={{
                                borderRadius: 100,
                                marginLeft: 20,
                                padding: 4,
                                borderWidth: 1,
                                borderColor: COLOURS.backgroundMedium,
                                opacity: 0.5,
                            }}>
                            <MaterialCommunityIcons
                                name="plus"
                                style={{
                                    fontSize: 16,
                                    color: COLOURS.backgroundDark,
                                }}
                            />
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => { }}>
                        <MaterialCommunityIcons
                            name="delete-outline"
                            style={{
                                fontSize: 16,
                                color: COLOURS.backgroundDark,
                                backgroundColor: COLOURS.backgroundLight,
                                padding: 8,
                                borderRadius: 100,
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            {/* <Text>{name}</Text > */}
        </TouchableOpacity>
    )
}

export default CardProducts

const styles = StyleSheet.create({})