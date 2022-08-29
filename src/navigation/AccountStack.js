import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from '../screens/account/AccountScreen'


const Stack = createNativeStackNavigator()

const AccountStack = () => {
  return (
    <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='AccountScreen' component={AccountScreen}/>
      </Stack.Navigator>
  )
}

export default AccountStack