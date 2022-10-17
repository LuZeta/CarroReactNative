import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
import { } from 'react-native';
import React from 'react';
// import LoginForm   from './src/components/Components/LoginForm';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './src/navigation/NavigationStack';
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <NavigationStack/>
    </NavigationContainer>
    </Provider>
  );
}