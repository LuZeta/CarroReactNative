import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOURS } from '../../constants/colors'
import { connect } from 'react-redux'

const Carrito = ({ data }) => {
  const { pedidos } = data;
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
        position: 'relative',
        paddingVertical: 30,
      }}>
      {pedidos?.map(((value, i) => {
        return (
          <View key={value.id}>
            <Text>{value.name}</Text>
          </View>
        )
      }))}
    </View>
  )
}
const mapStateToProps = (state) => {
  // console.log('screen Carrito ', state.Carrito)
  return { data: state.Carrito }
}
export default connect(mapStateToProps)(Carrito)

const styles = StyleSheet.create({})