import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const MisProductos = () => {

  const route = useRoute();
  console.log('route ', route.params)

  return (
    <View>
      <Text>MisProductos</Text>
    </View>
  )
}

export default MisProductos

const styles = StyleSheet.create({})