import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../screens/home/Home';
import ProductInfo from '../screens/ProductInfo';


const Stack = createNativeStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='HomeScreem' component={Home}/>
        <Stack.Screen name='ProductInfo' component={ProductInfo}/>
      </Stack.Navigator>
  )
}

export default HomeStack