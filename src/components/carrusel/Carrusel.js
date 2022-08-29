import { View, Text, StatusBar, ScrollView, TouchableOpacity, FlatList, Image, Dimensions, Animated} from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLOURS, Items } from '../../database/images/Database';
import Ionicons from '@expo/vector-icons/Ionicons';


const Carrousel = ({route, navigation}) => {
  const {productID} = route.params;

  const [product, setProduct] = useState({})

  const width = Dimensions.get('window').width

  const scrollX = new Animated.Value(0)

  let position = Animated.divide(scrollX, width)

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB()
    })

    return unsubscribe
  }, [navigation])


  //get product data by productID

  const getDataFromDB = async () => {
    for (let index = 0; index <Items.length; index++) {
      if(Items[index].id == productID){
        await setProduct(Items[index])
        return
      }
    }
  }

  
  const renderProduct = ({item, index}) => {
    return (
      <View style={{
        width: width,
        height: 240,
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Image 
          source={item} 
          style={{
            width: '100%',
            height: '100%',
            resizeMode:'contain'
        }}/>
      </View>
    )
  }
  

  return (
    <View style={{
      width: '100%',
      height: '100%',
      backgroundColor: COLOURS.white,
      position: 'relative'
    }}>
      <StatusBar backgroundColor={COLOURS.backgroundLight} barStyle='dark-content'/>
      <ScrollView>
        <View style={{
          width: '100%',
          backgroundColor: COLOURS.backgroundLight,
          borderBottomRightRadius:20,
          borderBottomLeftRadius:20,
          position: 'relative',
          justifyContent:'center',
          alignItems:'center',
          marginBottom:4
        }}>
          <View style={{
            width:'100%',
            flexDirection:'row',
            justifyContent:'space-between',
            paddingtop: 16,
            paddingLeft:16,
          }}>
            <TouchableOpacity>
              <Ionicons 
                    name="chevron-back-outline" 
                    size={20}
                    style={{
                        color:COLOURS.backgroundDark,
                        padding:12,
                        backgroundColor:COLOURS.white,
                        borderRadius:10,
                    }}
                />
            </TouchableOpacity>
          </View>
          <FlatList
            data={product.productImageList ? product.productImageList : null}
            renderItem={renderProduct}
            horizontal
            showsHorizontalScrollIndicator={false}
            decelerationRate={0.8}
            snapToInterval={width}
            bounces={false}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver:false},
            )}
          />
          <View 
            style={{
              width: '100%',
              flexDirection:'row',
              alignItems:'center',
              justifyContent:'center'
          }}>
            {
              product.productImageList ?
              product.productImageList.map((data, index) => {
                let opacity = position.interpolate({
                  inputRange: [index - 1, index, index + 1],
                  outputRange: [0.2, 1, 0.2],
                  extrapolate:'clamp'
                })
                return(
                  <Animated.View 
                    key={index}
                    style={{
                      width: '16%',
                      height: 2.4,
                      backgroundColor: COLOURS.black,
                      opacity,
                      marginHorizontal: 4,
                      borderRadius:100,
                  }}>

                  </Animated.View>
                )
              })
              : null
            }
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Carrousel