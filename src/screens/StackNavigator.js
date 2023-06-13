import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import WorkoutScreen from './WorkoutScreen';
import FitScreen from './FitScreen';
import RestScreen from './RestScreen';

const Stack = createNativeStackNavigator()

const StackNavigator = () => {

  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Workout" component={WorkoutScreen} />
          <Stack.Screen name="Fit" component={FitScreen} />
          <Stack.Screen name="Rest" component={RestScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})