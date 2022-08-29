import { StyleSheet } from "react-native";
import { COLOURS } from "../../../database/images/Database";

export const styles = StyleSheet.create({
    touchable:{
        width: '48%',
        marginVertical:14,
    },
    container:{
        width: '100%',
        height: 100,
        borderRadius:10,
        backgroundColor: COLOURS.backgroundLight,
        position: 'relative',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:8,
    },
    containerPercentage:{
        position: 'absolute',
        width:'20%',
        height: '24%',
        backgroundColor: COLOURS.green,
        top: 0,
        left: 0,
        borderTopLeftRadius:10,
        borderBottomRightRadius:10,
        alignItems:'center',
        justifyContent:'center',
    },
    percentage:{
        fontSize:12,
        color: COLOURS.white,
        fontWeight:'bold',
        letterSpacing:1,
    },
    image:{
        width: '80%',
        height: '80%',
        resizeMode:'contain'
    },
    text:{
        fontSize:12,
        color: COLOURS.black,
        fontWeight:'600',
        marginBottom:2,
    },
    containerAvailable:{
        flexDirection:'row',
        alignItems:'center',
    },
    iconCircleGreen:{
        fontSize:12,
        marginRight:6,
        color:COLOURS.green,
    },
    iconCircleRed:{
        fontSize:12,
        marginRight:6,
        color:COLOURS.red,
    },
});
