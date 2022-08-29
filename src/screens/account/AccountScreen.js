import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { COLOURS } from '../../database/images/Database';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './AccountScreen.styles';
import ChangeName from '../../components/accountButton/changeName/ChangeName';
import ChangePassword from '../../components/accountButton/changePassword/ChangePassword';
import ChangeEmail from '../../components/accountButton/changeEmail/ChangeEmail';


const AccountScreen = () => {

  const uri = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkXNhXJPtB42TijMyjAXYGFHZA_xUv88Nr2Q&usqp=CAU'

  return (
    <View style={styles.container}>

      <View style={styles.containerTitle}>
        <Text style={styles.title}>My Account</Text>
      </View>

      <View style={styles.cardPerfil}>
        <View>
          <Image
            source={{ uri: uri }}
            style={{ width: 90, height: 90, borderRadius: 100, resizeMode: 'contain', marginRight: 20, }}
          />
        </View>
        <View>
          <Text style={{ opacity: 0.8 }}>Diego Maidana</Text>
          <Text style={{ opacity: 0.6 }}>diegoshhh@gmail.com</Text>
        </View>
      </View>

      <View>
        <ChangeName />
        <ChangeEmail />
        <ChangePassword />
      </View>

      <TouchableOpacity style={styles.containerBtn}>
        <Text style={styles.btn}>Cerrar Sesion</Text>
      </TouchableOpacity>

    </View>
  )
}

export default AccountScreen