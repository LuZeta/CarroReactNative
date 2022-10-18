import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOURS } from '../../constants/colors'

const HomeScreen = () => {
  return (
    <View
      style={{
        paddingVertical: 30,
        flex: 1,
        backgroundColor: COLOURS.white,
      }}>
      <Text>HomeScreen</Text>

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})