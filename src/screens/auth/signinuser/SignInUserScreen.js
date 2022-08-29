import React, { useEffect, useState } from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { authentication } from '../../firebase/firebase'
import UserLoggedScreen from '../account/UserLoggedScreen'
import LoadingModal from '../../components/shared/LoadingModal'
import { styles } from './SignInUserScreen.styles'




const uri = 'https://i.pinimg.com/736x/d7/de/85/d7de851997cb86aea701a2013df48729.jpg'

const SignInUser = ({navigation}) => {
   
    const [isSignedIn, setIsSignedIn] = useState(null)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    useEffect(() => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, (user) => {
            isSignedIn(user ? true : false)
            console.log(user)
        })
        .catch(auth => {
            console.log(auth)
        })
        console.log(auth)
    }, [])
    

    // const SignIn = () => {
    //     signInWithEmailAndPassword(authentication, email, password)
    //     .then(resp => {
    //         setEmail('')
    //         setPassword('')

    //         setIsSignedIn(true)
    //     })
    //     .catch(resp => {
    //         console.log(resp)
    //     })
    // }

    // if(isSignedIn === null){
    //     return <LoadingModal show text='Cargando....'/>
    // }

    return (
        <>
            {
                isSignedIn ? 
                    <UserLoggedScreen/>
                :
                    <View style={{flex:1, justifyContent:'center'}}>
                        <Image source={{uri}} style={[styles.image, StyleSheet.absoluteFill]}/>
                        <SafeAreaView style={styles.container}>
                            <ScrollView contentContainerStyle={styles.container}>
                                <View style={styles.contentContainer}>
                                    <Text style={styles.title}>Hello Again!</Text>
                                    <Text style={styles.body}>Welcome back you've been missed!</Text>                

                                    <TextInput
                                        style={styles.input}
                                        placeholder='Enter username'
                                        autoCorrect={false}
                                        autoCapitalize='none'
                                        value={email}
                                        onChangeText = {text => setEmail(text)}
                                    />
                                    <TextInput
                                        style={styles.input}
                                        placeholder='Enter password'
                                        autoCorrect={false}
                                        secureTextEntry={true}
                                        value={password}
                                        onChangeText={text => setPassword(text)}
                                    />

                                    <TouchableOpacity>
                                        <Text style={[styles.btnText, {fontSize:15,lineHeight:30, textAlign:'right'}]}>Recovery Password</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity 
                                        onPress={() => setIsSignedIn(true)}
                                        style={styles.signInBtn}
                                    >
                                        <Text 
                                            style={{color:'#fff', fontWeight:'bold', fontSize:17}}
                                        >
                                            Sign In
                                        </Text>
                                    </TouchableOpacity>

                                    <Text style={{textAlign:'center', fontWeight:'500', fontSize:15}}>Or continue with</Text>


                                    <View style={styles.btnContainer}>
                                        <TouchableOpacity 
                                            style={styles.btn1}
                                            onPress={() => navigation.navigate('Welcome')}
                                        >
                                            <Image
                                                source={{
                                                    uri:'https://www.cast.mx/Google/GSuite/imagenes/G-Suite-By-Google-Cloud-Logo-CASTelecom.png'
                                                }}
                                                style={{width:40, height:40}}
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity 
                                            style={styles.btn1}
                                            onPress={() => navigation.navigate('Welcome')}
                                        >
                                            <Image
                                                source={{
                                                    uri:'https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png'
                                                }}
                                                style={{width:40, height:40}}
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity 
                                            style={styles.btn1}
                                            onPress={() => navigation.navigate('Welcome')}
                                        >
                                            <Image
                                                source={{
                                                    uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png'
                                                }}
                                                style={{width:40, height:40}}
                                            />
                                        </TouchableOpacity>


                                    </View>
                                </View>
                            </ScrollView>
                        </SafeAreaView>
                    </View>
            }
            
        </>
  )
}

export default SignInUser

