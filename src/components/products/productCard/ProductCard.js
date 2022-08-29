import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { COLOURS } from '../../../database/images/Database'
import { useNavigation } from '@react-navigation/native';
import { styles } from './ProductCard.styles';

const ProductCard = ({data}) => {

    const navigation = useNavigation()

  return (
        <TouchableOpacity 
            onPress={() => navigation.navigate('ProductInfo',{productID:data.id})}
            style={styles.touchable}
        >
            <View style={styles.container}>
                {
                    data.isOff ? (
                        <View style={styles.containerPercentage}>
                            <Text style={styles.percentage}>{data.offPercentage}%</Text>
                        </View>
                    ) : null
                }

                <Image source={data.productImage} style={styles.image}/>
            </View>

            <Text style={styles.text}>
                {data.productName}
            </Text>

            {
                data.category == 'accessory' ? (
                    data.isAvailable ? (
                        <View style={styles.containerAvailable}>
                            <FontAwesome name="circle" size={28} style={styles.iconCircleGreen}/>
                            <Text style={{fontSize:12, color:COLOURS.green}}>Available</Text>
                        </View>
                        ) : (
                            <View style={styles.containerAvailable}>
                                <FontAwesome name="circle" size={28} style={styles.iconCircleRed}/>
                                <Text style={{fontSize:12, color:COLOURS.red}}>Unavailable</Text>
                            </View>
                        )
                    ) : null 
            }
                <Text>&#8377; {data.productPrice}</Text>
        </TouchableOpacity>
        )
    }

export default ProductCard