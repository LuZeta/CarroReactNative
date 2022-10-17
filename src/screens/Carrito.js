import { Text, View, Icon } from 'react-native'
import React, { Component } from 'react'
import {connect} from 'react-redux';



const ShoppingCartIcon = (props) => (
  <View>
      <Icon onPress={() => props.navigation.navigate('Cart')}  />
  </View>
)

const mapStateToProps = (state) => {
  return {
      cartItems: state
  }
}


export default  connect(mapStateToProps) (ShoppingCartIcon);