import { StyleSheet } from "react-native";
import { COLOURS } from "../../../database/images/Database";

export const styles = StyleSheet.create({
    container:{
        height: '60%',
        paddingHorizontal:16,
        backgroundColor:COLOURS.white,
        flexDirection:'column',
        justifyContent:'space-around',
    },
    containerContent:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:14,
    },
    icon:{
        color: COLOURS.blue,
        marginRight:6,
        fontSize:28
    },
    iconLink:{
        fontSize:24,
        color: COLOURS.blue,
        marginRight:6,
        backgroundColor:COLOURS.blue + 10,
        padding: 8,
        borderRadius:100,
    },
    containerLocation:{
        color: COLOURS.blue,
        backgroundColor: COLOURS.backgroundLight,
        alignItems:'center',
        justifyContent: 'center',
        padding: 12,
        borderRadius:100,
        marginRight:10,
    },
    iconLocation:{
        fontSize:24,
        color: COLOURS.blue,
    },
    iconCrevronForward:{
        fontSize:26,
        color: COLOURS.backgroundDark
    },
    text:{
        fontSize:13,
        color: COLOURS.black
    },
    containerDescription:{
        flexDirection:'row',
        marginVertical:4,
        alignItems:'center',
        justifyContent:'space-between'
    },
    titleDescription:{
        fontSize:24,
        fontWeight:'600',
        letterSpacing:0.5,
        marginVertical:4,
        color: COLOURS.black,
        maxWidth:'84%',
    },
    description:{
        fontSize:15,
        color: COLOURS.black,
        fontWeight:'400',
        letterSpacing:1,
        lineHeight:20,
        opacity: 0.6,
        maxWidth:'85%',
        maxHeight:44,
        marginBottom:18,
    },
    contentFlexLocation:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginVertical:14,
        borderBottomColor: COLOURS.backgroundLight,
        borderBottomWidth:1,
        paddingBottom:20, 
    },
    flexLocation:{
        flexDirection:'row',
        width: '80%',
        alignItems:'center'
    },
    containerPrice:{
        paddingHorizontal:16,
    },
    price:{
        fontSize:18,
        fontWeight:'500',
        maxWidth:'85%',
        color: COLOURS.black,
        marginBottom:4,
    },
    discount:{
        opacity: 0.6,
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
        height: '90%',
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
})