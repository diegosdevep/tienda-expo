import React from 'react'
import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './WelcomeScreen.styles'


const uri = 'https://i.pinimg.com/736x/d7/de/85/d7de851997cb86aea701a2013df48729.jpg'

const Welcome = ({navigation}) => {

    const {height} = Dimensions.get('window')
  
    return (
    <View style={{flex:1, justifyContent:'center'}}>
        <Image source={{uri}} style={[styles.image, StyleSheet.absoluteFill]}/>
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.container}>
                <Image
                    source={{uri:'https://i.pinimg.com/originals/58/07/84/580784bf82583e8060971b3baafd98f4.png'}}
                    style={{
                        width:'80%', 
                        height: (height / 3) * 1.5,
                        borderRadius:16,
                        marginBottom:30,
                    }}
                />
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>Share your </Text>
                    <Text style={styles.title}>best resources</Text>
                    <Text style={styles.body}>Accelerate the creation of your app by searching here for your best resources</Text>
                
                    <View style={styles.btnContainer}>
                        <TouchableOpacity 
                            style={styles.btn1}
                            onPress={() => navigation.navigate('Register')}
                        >
                            <Text style={styles.btnText}>Register</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.btn2}
                            onPress={() => navigation.navigate('SignIn')}
                        >
                            <Text style={styles.btnText}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    </View>
  )
}

export default Welcome

