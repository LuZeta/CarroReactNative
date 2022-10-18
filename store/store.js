

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStore, combineReducers } from 'redux';
import carrito from '../src/reducers/carrito';

export const store = createStore(combineReducers({
    carrito
}));
