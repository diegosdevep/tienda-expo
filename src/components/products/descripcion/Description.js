import React from 'react'
import { View, Text, TouchableOpacity, ToastAndroid} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from './Description.styles';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';


const Description = ({product}) => {

    const navigation = useNavigation()

    const addToCart = async(id) => {
        let itemArray = await AsyncStorage.getItem('cartItems')
        itemArray = JSON.parse(itemArray)
        if(itemArray){
            let array = itemArray
            array.push(id)

            try {
                await AsyncStorage.setItem('cartItems', JSON.stringify(array))
                ToastAndroid.show(
                    'Item Added Successfully to cart',
                    ToastAndroid.SHORT,
                )
                navigation.navigate('MyCart')
            } catch (error) {
                return error
            }
        }
        else{
            let array = []
            array.push(id)
            try {
                await AsyncStorage.setItem('cartItems', JSON.stringify(array))
                ToastAndroid.show(
                    'Item Added Successfully to cart',
                    ToastAndroid.SHORT,
                )
                navigation.navigate('MyCart')
            } catch (error) {
                return error
            }
        }
    }

  return (
    <View style={styles.container}>
        <View style={styles.containerContent}>
            <Ionicons name="cart-outline" style={styles.icon}/>
            <Text style={styles.text}>Description</Text>
        </View>

        <View style={styles.containerDescription}>
            <Text style={styles.titleDescription}>{product.productName}</Text>
            <Ionicons name="link-outline" style={styles.iconLink}/>
        </View>

        <Text style={styles.description}>{product.description}</Text>
        
        <View style={styles.contentFlexLocation}>
            <View style={styles.flexLocation}>
                <View style={styles.containerLocation}>
                    <Ionicons name="location-outline" style={styles.iconLocation}/>
                </View>
                <Text style={{opacity:0.6}}>Rustaveli Ave 57, {'\n'}17-001, Batume</Text>
            </View>
            <Ionicons name="chevron-forward-outline" style={styles.iconCrevronForward}/>
        </View>
        
        <View style={styles.containerPrice}>
            <Text style={styles.price}>&#36; {product.productPrice}.00</Text>
            <Text style={styles.discount}>Tax Rate 2%~ &#36;{product.productPrice / 20}(&#36; 
            {product.productPrice + product.productPrice / 20})</Text>
        </View>

        <View style={styles.containerBtn}>
            <TouchableOpacity 
                onPress={() => (product.isAvailable ? addToCart(product.id) : null)} 
                style={styles.btn}
            >
                <Text style={styles.textBtn}>{product.isAvailable ? 'Add to card' : 'Not Available'}</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Description