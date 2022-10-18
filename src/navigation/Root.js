import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons'
import Carrito from '../screens/Carrito';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function Root({ colorScheme }) {
    console.log('root ')
    return (
        <NavigationContainer
            theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
            <BottomNavigation />
        </NavigationContainer>
    );
}

function BottomNavigation() {

    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="ios-home" color={color} />
                    ),
                    headerShown: false,
                    tabBarLabel: "Home",
                }}
            />
            <Tab.Screen
                name="Carrito"
                component={Carrito}
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="ios-home" color={color} />
                    ),
                    headerShown: false,
                    tabBarLabel: "Home",
                }}
            />
            <Tab.Screen
                name="SettingsScreen"
                component={SettingsScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="person-circle" color={color} />
                    ),
                    tabBarLabel: "Settings",
                }}
            />
        </Tab.Navigator>
    );
}

function TabBarIcon(props) {
    return <Ionicons size={28} style={{ marginBottom: -3 }} {...props} />;
}