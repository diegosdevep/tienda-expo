import { StyleSheet } from "react-native";
import { COLOURS } from "../../database/images/Database";

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
    },
    title:{
        fontSize:18,
        color: COLOURS.black,
        fontWeight:'500',
        letterSpacing:1,
        marginBottom:10,
    },
    text:{
        fontSize:14,
        color: COLOURS.black,
        fontWeight:'400',
        letterSpacing:1,
        marginBottom:10,
        lineHeight:24,
    },
    containerIcons:{
        width: '100%',
        flexDirection:'row',
        justifyContent:'space-between',
        padding: 16,
    },
    icons:{
        padding:18,
        backgroundColor:COLOURS.backgroundLight,
        borderRadius:10,
    },
    containerText:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    containerInternoText:{
        flexDirection:'row',
        alignItems:'center',
    },
    textTitleProducts:{
        fontSize:18,
        color: COLOURS.black,
        fontWeight:'500',
        letterSpacing:1,
    },
    textQuantityProducts:{
        fontSize:14,
        color: COLOURS.black,
        fontWeight:'400',
        opacity: 0.5,
        marginLeft:10,
    },
    textSeeAll:{
        fontSize:14,
        color: COLOURS.blue,
        fontWeight:'400'
    }
});