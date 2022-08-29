import { StyleSheet } from "react-native";
import { COLOURS } from "../../../database/images/Database";


export const styles = StyleSheet.create({
      row:{
        width: '100%',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'flex-start',
        padding: 16,
        backgroundColor:COLOURS.white,
        marginBottom:2,
      },
      text:{
        fontSize:16,
        fontWeight:'400',
        opacity: 0.6,
      },
})