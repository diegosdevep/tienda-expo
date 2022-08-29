import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './ChangeName.styles';


const ChangeName = () => {
  return (
    <TouchableOpacity style={styles.row}>
      <View style={{flexDirection:'row', alignItems:'flex-start', width:'100%'}}>
        <MaterialCommunityIcons name="account-circle" style={{marginRight:10, fontSize:25, color:'grey'}}/>
        <Text style={styles.text}>Change Name and Lastname</Text>
      </View>
      <Ionicons name="chevron-forward-outline" size={18}/>
    </TouchableOpacity>
  )
}

export default ChangeName