import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLOURS } from '../../constants/colors'
import Material from '@expo/vector-icons/MaterialCommunityIcons'

const HomeScreen = () => {
  return (
    <View
      style={{
        paddingVertical: 30,
        flex: 1,
        backgroundColor: COLOURS.white,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: COLOURS.white,
            position: 'relative',
          }}>

          <Image source={require('../assets/images/background.png')} style={{ position: 'absolute', top: 0, left: -100 }} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 20,
            }}>
            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
              }}>
              <Image
                source={{
                  uri: "https://lh3.googleusercontent.com/a-/AFdZucrTaR6Kc9j8e9OBuSjCmnE60SjOGHg5FVm_l74-=s192-c-rg-br100"
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'contain',
                  borderRadius: 500,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Material
                name="segment"
                style={{
                  fontSize: 28,
                  color: COLOURS.black,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ padding: 20 }}>
            <Text
              style={{
                fontSize: 16,
                color: COLOURS.black,
                opacity: 0.5,
                fontWeight: '400',
              }}>
              Food
            </Text>
            <Text
              style={{
                fontSize: 40,
                color: COLOURS.black,
                fontWeight: '600',
                letterSpacing: 2,
              }}>
              Delivery
            </Text>
          </View>

        </View>
      </ScrollView>

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})