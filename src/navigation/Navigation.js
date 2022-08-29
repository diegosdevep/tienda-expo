import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MyCartStack from './MyCartStack'
import AccountStack from './AccountStack'
import HomeStack from './HomeStack'
import { StyleSheet } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';


const Tab = createBottomTabNavigator()

const Navigation = () => {
  return (
    <Tab.Navigator 
      screenOptions={{
        headerShown:false,
        tabBarShowLabel:false,
        tabBarStyle: styles.tabBar, 
      }}
    >
        <Tab.Screen 
          name='Home' 
          component={HomeStack}
          options={{
            tabBarIcon: ({focused}) => (
              <Ionicons name='home' size={24} color={ focused ? 'black' : 'grey'}/>
            )
          }}
        />
        <Tab.Screen 
          name='Cart' 
          component={MyCartStack}
          options={{
            tabBarIcon: ({focused}) => (
              <Ionicons name='cart' size={24} color={ focused ? 'black' : 'grey'}/>
            )
          }}
        />
        <Tab.Screen 
          name='Account' 
          component={AccountStack}
          options={{
            tabBarIcon: ({focused}) => (
              <Ionicons name='person' size={24} color={ focused ? 'black' : 'grey'} />
            )
          }}
        />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBar:{},
  item:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  }
});

export default Navigation