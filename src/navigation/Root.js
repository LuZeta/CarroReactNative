import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons'
import Carrito from '../screens/Carrito';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MisProductos from '../screens/MisProductos';
import { connect } from 'react-redux';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Root = ({ colorScheme }) => {

    return (
        <NavigationContainer
            theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
            <BottomNavigation />
        </NavigationContainer>
    );
}
// const mapStateToProps = state => {
//     console.log('log ', state)
//     return state
// }
// export default connect(mapStateToProps)(Root);
export default Root;

function BottomNavigation() {

    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen
                name="HomeStack"
                component={HomeStack}
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
                        <TabBarIcon name="cart" color={color} />
                    ),
                    headerShown: false,
                    tabBarLabel: "Carrito",
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

function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="MisProductos"
                component={MisProductos}
                options={{
                    headerShown: false,
                    title: 'Detalle'
                }}
            />

        </Stack.Navigator>
    );
}