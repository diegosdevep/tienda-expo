import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, ToastAndroid } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { COLOURS, Items } from '../../database/images/Database'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './MyCartScreen.styles';


const MyCartScreen = ({navigation}) => {

  const [product, setProduct] = useState()
  const [total, setTotal] = useState(null)
  const [count, setCount] = useState(1)

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB()
    })
  
    return unsubscribe
  }, [navigation])


  //get data from local DB by ID
  const getDataFromDB = async() => {
    let items = await AsyncStorage.getItem('cartItems')
    items = JSON.parse(items)
    let productData = []
    if(items){
      Items.forEach(data => {
        if(items.includes(data.id)){
          productData.push(data)
          return
        }
      })
      setProduct(productData)
      getTotal(productData)
    }else{
      setProduct(false)
      getTotal(false)
    }
  }

  const getTotal = (productData) => {
    let total = 0
    for (let index = 0; index < productData.length; index++) {
      let productPrice = productData[index].productPrice
      total = total + productPrice
    }
    setTotal(total)
  }

  const removeItemFromCart = async id => {
    let itemArray = await AsyncStorage.getItem('cartItems');
    itemArray = JSON.parse(itemArray);
    if (itemArray) {
      let array = itemArray;
      for (let index = 0; index < array.length; index++) {
        if (array[index] == id) {
          array.splice(index, 1);
        }

        await AsyncStorage.setItem('cartItems', JSON.stringify(array));
        getDataFromDB();
      }
    }
  };
  
  const checkout = async() => {
    try {
      await AsyncStorage.removeItem('cartItems')
    } catch (error) {
      return error
    }

    ToastAndroid.show('Items will be Deliverd Soon!', ToastAndroid.SHORT)
    navigation.navigate('HomeScreem')
  }


  const renderProducts = (data, index) => {
    return (
      <TouchableOpacity
        key={data.id} 
        onPress={() => navigation.navigate('ProductInfo', {productID: data.id})} 
        style={styles.touchableImage}
      >
        <View style={styles.containerImage}>
          <Image style={styles.image} source={data.productImage}/>
        </View>

        <View style={styles.card}>
          <View style={{}}>
            <Text style={styles.titleProduct}>{data.productName}</Text>
            
            <View style={styles.contentTextCard}>
              <Text style={styles.price}>
                &#36;{data.productPrice}
              </Text>
              <Text>
                (~&#36;
                {data.productPrice + data.productPrice / 20})
              </Text>
            </View>
          </View>
          
          <View style={styles.contentCard}>
            <View style={{flexDirection:'row', alignItems:'center',}}>
              <View style={styles.boxIcon}>
                <Ionicons onPress={() => null} name="remove-outline" size={20} style={styles.iconAddLess}/>
              </View>
              <Text style={{marginHorizontal:20,}}>
                {count}
              </Text>
              <View style={styles.boxIcon}>
                <Ionicons onPress={() => null} name="add-outline" size={20} style={styles.iconAddLess}/>
              </View>
            </View>
            <TouchableOpacity onPress={() => removeItemFromCart(data.id)}>
              <Ionicons name="trash-outline" size={20} style={styles.delete}/>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>

      <ScrollView>
        <View style={styles.containerTouchable}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-outline" size={20} style={styles.iconCrevron}/>
          </TouchableOpacity>
          <Text style={styles.text}>Order Details</Text>
          <View></View>
        </View>
        <Text style={styles.title}>My Cart</Text>
      

        <View style={{paddingHorizontal:16}}>
          {product ? product.map(renderProducts) : null}
        </View>
        <View>
          <View style={styles.containerSubtitle}>
            <Text style={styles.subtitle}>Delivery Location</Text>
            <View style={styles.flex}>
              <View style={styles.cardTransport}>
                <View style={styles.containerIconTransport}>
                  <MaterialCommunityIcons name="truck-delivery-outline" style={styles.iconTransport}/>
                </View>
                <View>
                  <Text style={styles.textLocation}> Mariannestrasse 100</Text>
                  <Text style={styles.textLocation}> 04315, Leipzig</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward-outline" size={20} style={{fontSize:22, color:COLOURS.black}}/>
            </View>
          </View>

          <View style={styles.containerSubtitle}>
            <Text style={styles.subtitle}>Payment Method</Text>
            <View style={styles.flex}>
              <View style={styles.cardTransport}>
                <View style={styles.containerTextVisa}>
                  <Text style={styles.textVisa}>Visa</Text>
                </View>
                <View>
                  <Text style={styles.textLocation}> Visa Classic</Text>
                  <Text style={styles.textLocation}> ****9092</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward-outline" size={20} style={{fontSize:22, color:COLOURS.black}}/>
            </View>
          </View>

          <View style={{paddingHorizontal:16, marginTop:40, marginBottom:80}}>
            <Text style={styles.subtitle}>Order Info</Text>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between',}}>
              <Text style={styles.subtotalText}>Subtotal</Text>
              <Text style={styles.subtotalPrice}>&#36;{total}.00</Text>
            </View>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginBottom:22}}>
              <Text style={styles.subtotalText}>Shipping Tax</Text>
              <Text style={styles.subtotalPrice}>&#36;{total / 20}</Text>
            </View>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
              <Text style={[styles.subtotalText, {fontSize:22}]}>Total</Text>
              <Text style={[styles.subtotalPrice, {fontSize:22}]}>&#36;{total + total / 20}</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.containerBtn}>
            <TouchableOpacity 
                onPress={() => (total != 0 ? checkout() : null)} 
                style={styles.btn}
            >
                <Text style={styles.textBtn}>Checkout (&#36;{total + total /20})</Text>
            </TouchableOpacity>
      </View>
    </View>
  )
}

export default MyCartScreen