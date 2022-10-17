import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Carrito from "../screens/Carrito"
import Checkout from '../screens/checkout';
import Comida from '../screens/Comida';


const Tab = createBottomTabNavigator();
export const BottomTab = () => {
    return (
<Tab.Navigator>   
<Tab.Screen name="Comida" component={Comida}/>     
<Tab.Screen name="Carrito" component={Carrito}/>
<Tab.Screen name="Checkout" component={Checkout}/>     
</Tab.Navigator>        

    )
}