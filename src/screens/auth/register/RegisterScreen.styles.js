import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width: '100%',
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
        padding:20,
        fontSize:30,
        lineHeight:35,
        fontWeight:'400',
        textAlign:'center',
        color: '#355147'
    },
    btnContainer:{
        flexDirection:'row',
        width: '100%',
        backgroundColor:'#dfe3e630',
        marginTop:40,
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
        borderWidth:2,
        borderColor:'#fff',
        borderRadius:16,
        marginHorizontal:10,
    },
    btn2:{
        flex: 1,
        alignItems:'center',
        padding: 16,
    },
    input:{
        padding: 20,
        borderRadius:16,
        backgroundColor:'#f7f7f7',
        marginBottom:10,
    },
    signInBtn:{
        backgroundColor:'#FD6D6A',
        padding: 20,
        borderRadius:16,
        alignItems:'center',
        marginVertical:30,
        shadowColor:'#FD6D6A',
        shadowOffset:{
            width: 0,
            height:8,
        },
        shadowOpacity:0.44,
        shadowRadius:10.32,
        elevation:15
    }
})