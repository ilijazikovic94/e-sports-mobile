import React, { useState, Component } from 'react';

import { Image, TouchableOpacity, Animated, Easing, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import TabBarIcon from '../components/TabBarIcon';
import { Ionicons } from '@expo/vector-icons';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const Stack = createStackNavigator();
const INITIAL_ROUTE_NAME = 'LOGIN';

export default function AuthStackNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html

  navigation.setOptions({
      header: null
  });

  return (
    <Stack.Navigator initialRouteName={INITIAL_ROUTE_NAME} headerMode="none">
      <Stack.Screen
        name="LOGIN"
        component={LoginScreen}
      />
      <Stack.Screen
        name="SIGNUP"
        component={SignupScreen}
      />
    </Stack.Navigator>
  );
}