import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { BottomTab } from './BottomTab';
import MisProductos from '../screens/MisProductos';

const Stack = createStackNavigator();

export default function NavigationStack() {
  return (
    <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="MisProductos" component={BottomTab}/>
    </Stack.Navigator>
  )
}

