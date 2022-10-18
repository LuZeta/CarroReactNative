import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { COLOURS } from '../../constants/colors';
import FontAwesome from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';

const MisProductos = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {
    name,
    price,
    image,
    size,
    crust,
    delivery,
    ingredients,
    isTopOfTheWeek,
  } = route.params;
  console.log('route ', route.params)

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
        position: 'relative',
        paddingVertical: 30,
      }}>
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
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            backgroundColor: COLOURS.accent,
            opacity: isTopOfTheWeek ? 1 : 0.5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AntDesign name="star" style={{ fontSize: 15, color: COLOURS.white }} />
        </View>
      </View>
      <Text
        style={{
          fontSize: 38,
          color: COLOURS.black,
          fontWeight: '800',
          paddingHorizontal: 20,
          maxWidth: 310,
        }}>
        {name}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}>
        <Text
          style={{
            fontSize: 20,
            color: COLOURS.accentRed,
            fontWeight: '900',
            paddingRight: 5,
            paddingBottom: 8,
          }}>
          $
        </Text>
        <Text
          style={{
            fontSize: 38,
            color: COLOURS.accentRed,
            fontWeight: '900',
          }}>
          {price}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          maxHeight: 300,
          width: '100%',
          alignItems: 'center',
        }}>
        <View style={{ paddingHorizontal: 20 }}>
          <View style={{ paddingVertical: 20 }}>
            <Text
              style={{
                fontSize: 12,
                color: COLOURS.black,
                opacity: 0.5,
              }}>
              Size
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: COLOURS.black,
                fontWeight: '600',
              }}>
              {size}
            </Text>
          </View>
          <View style={{ paddingVertical: 20 }}>
            <Text
              style={{
                fontSize: 12,
                color: COLOURS.black,
                opacity: 0.5,
              }}>
              Crust
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: COLOURS.black,
                fontWeight: '600',
              }}>
              {crust}
            </Text>
          </View>
          <View style={{ paddingVertical: 20 }}>
            <Text
              style={{
                fontSize: 12,
                color: COLOURS.black,
                opacity: 0.5,
              }}>
              Delivery
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: COLOURS.black,
                fontWeight: '600',
              }}>
              {delivery} min
            </Text>
          </View>
        </View>
        <View
          style={{
            width: 380,
            height: 380,
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
      </View>
      <Text
        style={{
          paddingTop: 20,
          paddingHorizontal: 20,
          fontSize: 20,
          fontWeight: '700',
          color: COLOURS.black,
        }}>
        Ingredients
      </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {ingredients.map((data, index) => {
          return (
            <View
              key={index}
              style={{
                margin: 12,
                width: 80,
                height: 80,
                borderRadius: 20,
                backgroundColor: COLOURS.white,
                elevation: 5,
              }}>
              <Image
                source={data}
                style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
              />
            </View>
          );
        })}
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          width: '100%',
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            width: '90%',
            height: 80,
            backgroundColor: COLOURS.accent,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: COLOURS.black,
              letterSpacing: 1,
              marginRight: 10,
            }}>
            Añadir al Carrito
          </Text>
          <Entypo
            name="chevron-right"
            style={{ fontSize: 16, color: COLOURS.black }}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default MisProductos

const styles = StyleSheet.create({})