import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './ChangeEmail.styles';


const ChangeEmail = () => {
  return (
    <TouchableOpacity style={styles.row}>
      <View style={{flexDirection:'row', alignItems:'flex-start', width:'100%'}}>
        <MaterialCommunityIcons name="at" style={{marginRight:10, fontSize:25, color:'grey'}}/>
        <Text style={styles.text}>Change Email</Text>
      </View>
      <Ionicons name="chevron-forward-outline" size={18}/>
    </TouchableOpacity>
  )
}

export default ChangeEmail