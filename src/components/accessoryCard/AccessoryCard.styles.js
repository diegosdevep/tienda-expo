import { StyleSheet } from "react-native";
import { COLOURS } from "../../database/images/Database";

export const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    containerText:{
        flexDirection:'row',
        alignItems:'center',
    },
    text:{
        fontSize:18,
        color: COLOURS.black,
        fontWeight:'500',
        letterSpacing:1,
    },
    textQuantityAccessoryAvailable:{
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
    },
    accessoryContainer:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-around'
    }
});