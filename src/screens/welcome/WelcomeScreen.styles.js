import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        backgroundColor:'transparent'
    },
    contentContainer:{
        paddingHorizontal:30,
    },
    image:{
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode:'cover'
    },
    title:{
        color: '#355147',
        fontSize:32,
        fontWeight:'700',
        textAlign:'center',
        lineHeight:35,
    },
    body:{
        paddingTop:20,
        fontSize:17,
        lineHeight:23,
        fontWeight:'400',
        textAlign:'center',
        color: '#355147'
    },
    btnText:{
        fontWeight:'500',
        color: '#355147',
        fontSize:18
    },
    btn1:{
        flex: 1,
        alignItems:'center',
        backgroundColor:'#ffffff70',
        padding: 16,
        borderRadius:6,
    },
    btn2:{
        flex: 1,
        alignItems:'center',
        padding: 16,
    },
    btnContainer:{
        flexDirection:'row',
        width: '100%',
        borderWidth:2,
        borderColor:'#fff',
        borderRadius:16,
        backgroundColor:'#dfe3e630',
        marginTop:40,
    }
})