import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { Provider } from 'react-redux';
import Root from './src/navigation/Root';
import { store } from './src/store/store';

export default function Wrapper() {
  const theme = useColorScheme();

  return (
    <Provider store={store}>
      <StatusBar barStyle={theme === 'dark' ? 'dark-content' : 'light-content'} />
      <App />
    </Provider>
  );
}

export function App() {
  return <Root />
}