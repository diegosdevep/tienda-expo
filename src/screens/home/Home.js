import React, { useEffect, useState } from 'react'
import { View, Text, StatusBar, ScrollView } from 'react-native'
import { COLOURS, Items } from '../../database/images/Database'
import Products from '../../components/products/Productos';
import AccessoryCard from '../../components/accessoryCard/AccessoryCard';
import { styles } from './Home.styles';

const Home = ({navigation}) => {

    const [products, setProducts] = useState([])
    const [accessory, setAccesory] = useState([])

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getDataFromDB()
        })

        return unsubscribe
    }, [navigation])


    const getDataFromDB = () => {
        let productList = []
        let accessoryList = []
        for (let index = 0; index < Items.length; index++) {
            if(Items[index].category == 'product'){
                productList.push(Items[index])
            }else if(Items[index].category == 'accessory'){
                accessoryList.push(Items[index])
            }
        }

        setProducts(productList)
        setAccesory(accessoryList)
    }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLOURS.white} barStyle='dark-content'/>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={{marginBottom:10, padding:16}}>
            <Text style={styles.title}>Expo Store</Text>
            <Text style={styles.text}>
                Audio shop
                {'.\n'}This shop offers products and accesories
            </Text>
        </View>

        <View style={{padding:16}}>
            <View style={styles.containerText}>
                <View style={styles.containerInternoText}>
                    <Text style={styles.textTitleProducts}>Products</Text>
                    <Text style={styles.textQuantityProducts}>41</Text>
                </View>
                <Text style={styles.textSeeAll}>SeeAll</Text>
            </View>

            <Products products={products}/>
        </View>

        <AccessoryCard accessory={accessory}/>

      </ScrollView>
    </View>
  )
}


export default Home