

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStore, combineReducers } from 'redux';
import Carrito from '../reducers/carrito';
import Total from '../reducers/totalCart';


export const store = createStore(combineReducers({
    Carrito, Total
}));
