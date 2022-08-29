import { StyleSheet } from "react-native";
import { COLOURS } from "../../database/images/Database";

export const styles = StyleSheet.create({
    container:{
      flexDirection:'column',
      backgroundColor:COLOURS.backgroundLight
    },
    containerTitle:{
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:COLOURS.white
    },
    title:{
      fontSize:18,
      fontWeight:'500',
      padding: 16,
    },
    cardPerfil:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      marginVertical:30,
    },
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
    containerBtn:{
      alignItems:'center',
      padding: 16,
      marginTop:40,
      backgroundColor:COLOURS.white
    },
    btn:{
      fontSize:16,
      color: COLOURS.blue,
      fontWeight:'500'
    }
  });