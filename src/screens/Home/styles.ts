import { StyleSheet } from "react-native";


export const styles = StyleSheet.create ({
    blackBackGround:{
       backgroundColor: '#0D0D0D',
        alignItems: 'center',
        paddingTop: 78,
        maxHeight: 173,
        flex: 1 
    },
 
    greyBackground:{
        backgroundColor: '#1A1A1A',
        flex: 1,
        paddingTop: 200
        
    },

    form:{
        flexDirection: 'row',
        paddingTop: 0,
        paddingLeft: 24,
        paddingRight: 24,
        marginBottom: '40%',
        marginTop: '0%',
        flex: 1,
        alignItems: 'center',
        position: 'absolute'
    },

    input:{
        height: 54,
        width: '80%',
        backgroundColor: '#262626',
        borderRadius: 5, 
        color: '#FFFF',
        padding: 16,
        fontSize: 16,
        marginRight: 12,
        
    },

    button:{
        width: 52,
        height: 52, 
        borderRadius: 15,
        backgroundColor: '#1E6F9F', 
        alignItems:  "center", 
        justifyContent: "center",
    },
    
    textButton:{
        color: '#FFF',
        fontSize: 20
    },

    listTask:{
        marginBottom: 20
    },

});