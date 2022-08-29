import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyCartScreen from '../screens/mycart/MyCartScreen'


const Stack = createNativeStackNavigator()

const MyCartStack = () => {
  return (
    <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='MyCart' component={MyCartScreen}/>
      </Stack.Navigator>
  )
}

export default MyCartStack