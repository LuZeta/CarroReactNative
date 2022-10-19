import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLOURS } from '../../constants/colors'
import Material from '@expo/vector-icons/MaterialCommunityIcons'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import AntDesign from '@expo/vector-icons/AntDesign'
import Entypo from '@expo/vector-icons/Entypo'
import { Categories } from '../database/items'
import { useNavigation } from '@react-navigation/native'
import { connect } from 'react-redux'
import { addShop } from '../reducers/carrito'

const HomeScreen = ({ data, addShop }) => {
  const [currentSelected, setCurrentSelected] = useState([0]);
  const navigation = useNavigation();

  const renderCategories = ({ item, index }) => {

    return (
      <TouchableOpacity activeOpacity={0.9}
        onPress={() => setCurrentSelected(index)}>
        <View
          style={[styles.containerCategory, {
            backgroundColor: currentSelected == index ? COLOURS.accent : COLOURS.white,
          }]}>
          <View style={{ width: 60, height: 60 }}>
            <Image
              source={item.image}
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'center',
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 16,
              color: COLOURS.black,
              fontWeight: '600',
            }}>
            {item.name}
          </Text>
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 100,
              backgroundColor:
                currentSelected == index ? COLOURS.white : COLOURS.accentRed,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <FontAwesome5
              name="angle-right"
              style={{
                fontSize: 12,
                color: currentSelected == index ? COLOURS.black : COLOURS.white,
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderItems = (data, index) => {

    return (
      <TouchableOpacity
        key={index}
        activeOpacity={0.9}
        style={{
          width: '100%',
          height: 180,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() =>
          navigation.navigate('MisProductos', {
            name: data.name,
            price: data.price,
            image: data.image,
            size: data.size,
            crust: data.crust,
            delivery: data.delivery,
            ingredients: data.ingredients,
            isTopOfTheWeek: data.isTopOfTheWeek,
          })
        }>
        <View style={styles.wrapperMenu}>
          <View style={{ marginBottom: 50 }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                display: data.isTopOfTheWeek ? 'flex' : 'none',
              }}>
              <FontAwesome5
                name="crown"
                style={{
                  fontSize: 10,
                  color: COLOURS.accent,
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: COLOURS.black,
                  opacity: 0.8,
                  marginLeft: 5,
                }}>
                top of the week
              </Text>
            </View>
            <Text
              style={{
                fontSize: 22,
                color: COLOURS.black,
                fontWeight: 'bold',
                paddingTop: 10,
              }}>
              {data.name}
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: COLOURS.black,
                opacity: 0.5,
              }}>
              {data.weight}
            </Text>
          </View>
          <View style={{ width: 150, height: 150, marginRight: -45 }}>
            <Image
              source={data.image}
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'contain',
              }}
            />
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                // console.log('add comida ', data.id, data.name)
                addShop(data)
              }}
            >
              <View
                style={{
                  width: 85,
                  height: 50,
                  backgroundColor: COLOURS.accentRed,
                  borderTopRightRadius: 20,
                  borderBottomLeftRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Entypo
                  name="circle-with-plus"
                  style={{ fontSize: 30, color: COLOURS.white }}
                />
              </View>
            </TouchableOpacity>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 20,
              }}>
              <AntDesign
                name="star"
                style={{ fontSize: 12, color: COLOURS.black, paddingRight: 5 }}
              />
              <Text
                style={{
                  fontSize: 15,
                  color: COLOURS.black,
                  fontWeight: 'bold',
                }}>
                {data.rating}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Image source={require('../assets/images/background.png')} style={{ position: 'absolute', top: 0, left: -100 }} />
          <View style={styles.headerSection}>
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
              style={styles.topTitle}>Food</Text>
            <Text style={styles.title}>Delivery </Text>
          </View>
          <Text style={styles.titleCategory}> Categorias </Text>
          <FlatList
            horizontal={true}
            data={Categories}
            renderItem={renderCategories}
            showsHorizontalScrollIndicator={false}
          />

          <Text style={[styles.titleMenu, { color: COLOURS.black, }]}>
            Menú
          </Text>

          {Categories[currentSelected].items.map(renderItems)}
          <TouchableOpacity
            style={{
              margin: 30,
              justifyContent: 'center',
              alignItems: 'center',
              opacity: 0.5,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: COLOURS.black,
                borderBottomWidth: 1,
                borderBottomColor: COLOURS.black,
              }}>
              More...
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}
const mapStateToProps = (state) => {
  // console.log('state HomeScreen ', state.Carrito)
  return { data: state.Carrito }
}

const mapDispatchToProps = dispatch => ({
  addShop: (data) => dispatch(addShop(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLOURS.white,
  },
  container: {
    paddingVertical: 30,
    width: '100%',
    height: '100%',
    backgroundColor: COLOURS.white,
    position: 'relative',
  },
  headerSection: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 20,
  },
  topTitle: {
    fontSize: 16,
    color: COLOURS.black,
    opacity: 0.5,
    fontWeight: '400',
  },
  title: {
    fontSize: 40,
    color: COLOURS.black,
    fontWeight: '600',
    letterSpacing: 2,
  },
  titleMenu: {
    paddingTop: 20,
    paddingHorizontal: 20,
    fontSize: 18,
    fontWeight: '700',
  },
  titleCategory: {
    paddingTop: 20,
    paddingHorizontal: 20,
    fontSize: 18,
    fontWeight: '700',
    color: COLOURS.black,
    letterSpacing: 1,
  },
  containerCategory: {
    width: 120,
    height: 180,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 20,
    margin: 10,
    elevation: 5,
  },
  wrapperMenu: {
    width: '90%',
    height: 160,
    backgroundColor: COLOURS.white,
    borderWidth: 1,
    borderColor: COLOURS.light,
    borderRadius: 20,
    elevation: 4,
    position: 'relative',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }

})