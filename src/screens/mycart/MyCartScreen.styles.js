import { StyleSheet } from "react-native";
import { COLOURS } from "../../database/images/Database";

export const styles = StyleSheet.create({
    container:{
      width: '100%',
      height: '100%',
      backgroundColor:COLOURS.white,
    },
    containerTouchable:{
      width: '100%',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      padding: 16,
      paddingHorizontal:16,
    },
    iconCrevron:{
      color: COLOURS.backgroundDark,
      padding: 12,
      backgroundColor:COLOURS.backgroundLight,
      borderRadius:12,
    },
    text:{
      fontSize:14,
      color: COLOURS.black,
      fontWeight:'400'
    },
    title:{
      fontSize:20,
      color: COLOURS.black,
      fontWeight:'500',
      letterSpacing:1,
      paddingTop:20,
      paddingLeft:16,
      marginBottom:10,
    },
    touchableImage:{
      width: '100%',
      height: 100,
      marginVertical:6,
      flexDirection:'row',
      alignItems:'center'
    },
    containerImage:{
      width: '30%',
      height: 100,
      padding: 14,
      justifyContent: 'center',
      alignItems:'center',
      backgroundColor:COLOURS.backgroundLight,
      borderRadius:10,
      marginRight:22,
    },
    image:{
      width: '100%',
      height: '100%',
      resizeMode:'contain'
    },
    card:{
      flex: 1,
      height: '100%',
      justifyContent:'space-around'
    },
    contentCard:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
    },
    titleProduct:{
      fontSize:14,
      maxWidth:'100%',
      color: COLOURS.black,
      fontWeight:'600',
      letterSpacing:1
    },
    price:{
      fontSize:14,
      fontWeight:'400',
      maxWidth:'85%',
      marginRight:4,
    },
    contentTextCard:{
      marginTop:4,
      flexDirection:'row',
      alignItems:'center',
      opacity: 0.6,
    },
    boxIcon:{
      borderRadius:100,
      padding: 4,
      borderWidth:1,
      borderColor:COLOURS.backgroundMedium,
      opacity: 0.5,
    },
    iconAddLess:{
      fontSize:16,
      color: COLOURS.backgroundDark
    },
    delete:{
      fontSize:16,
      color: COLOURS.backgroundDark,
      backgroundColor:COLOURS.backgroundLight,
      padding: 8,
      borderRadius:100
    },
    containerSubtitle:{
      paddingHorizontal:16,
      marginVertical:10,
    },
    subtitle:{
      fontSize:16,
      color: COLOURS.black,
      fontWeight:'500',
      letterSpacing:1,
      marginBottom:20,
    },
    cardTransport:{
      flexDirection:'row',
      width: '80%',
      alignItems:'center',
    },
    containerIconTransport:{
      color: COLOURS.blue,
      backgroundColor: COLOURS.backgroundLight,
      alignItems:'center',
      justifyContent:'center',
      padding: 12,
      borderRadius:100,
      marginRight:18,
    },
    iconTransport:{
      fontSize:22,
      color: COLOURS.blue,
    },
    textLocation:{
      fontSize:14,
      color: COLOURS.black,
      fontWeight:'500',
      opacity: 0.5,
      lineHeight:20,
    },
    flex:{
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center',
    },
    containerTextVisa:{
      color: COLOURS.blue,
      backgroundColor:COLOURS.backgroundLight,
      alignItems:'center',
      justifyContent: 'center',
      padding: 12,
      borderRadius:10,
      marginRight:18,
    },
    textVisa:{
      fontSize:10,
      fontWeight:'900',
      color: COLOURS.blue,
      letterSpacing:1
    },
    subtotalText:{
      fontSize:12,
      fontWeight:'400',
      maxWidth:'80%',
      color: COLOURS.black,
      opacity: 0.5,
    },
    subtotalPrice:{
      fontSize:12,
      fontWeight:'400',
      color: COLOURS.black,
      opacity: 0.8,
    },
    containerBtn:{
      width: '100%',
      height: '12%',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:COLOURS.white,
    },
    btn:{
        width: '86%',
        height: '70%',
        backgroundColor:COLOURS.blue,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center'
    },
    textBtn:{
        fontSize:14,
        fontWeight:'500',
        letterSpacing:1,
        color: COLOURS.white,
        textTransform:'uppercase'
    }
  });

  