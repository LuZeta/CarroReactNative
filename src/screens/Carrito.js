import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLOURS } from '../../constants/colors'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { connect } from 'react-redux'
import React, { useState } from 'react'
import CardProducts from '../components/CardProducts'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'

const Carrito = ({ data, total }) => {
  console.log('total ', total)
  const { pedidos } = data;
  const navigation = useNavigation();

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
        position: 'relative',
        paddingVertical: 30,
      }}>
      <ScrollView>
        <View
          style={{
            padding: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: COLOURS.lightGray,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <FontAwesome
              name="angle-left"
              style={{
                fontSize: 16,
                color: COLOURS.black,
              }}
            />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 20,
            color: COLOURS.black,
            fontWeight: '500',
            letterSpacing: 1,
            paddingTop: 20,
            paddingLeft: 16,
            marginBottom: 10,
          }}>
          My Cart
        </Text>
        <View style={{ paddingHorizontal: 16 }}>
          {pedidos ? pedidos.map((value) => {
            return (
              <CardProducts value={value} />
            )
          }) : null}
        </View>
        <View>

          <View
            style={{
              paddingHorizontal: 16,
              marginTop: 40,
              marginBottom: 80,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: COLOURS.black,
                fontWeight: '500',
                letterSpacing: 1,
                marginBottom: 20,
              }}>
              Order Info
            </Text>


            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  maxWidth: '80%',
                  color: COLOURS.black,
                  opacity: 0.5,
                }}>
                Total
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: COLOURS.black,
                }}>
                {/* $ {total + total / 20} */}
                {total}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
const mapStateToProps = (state) => {
  // console.log('screen Carrito ', state.Carrito)
  return { data: state.Carrito, total: state.Total }
}
export default connect(mapStateToProps)(Carrito)

const styles = StyleSheet.create({})