import { StyleSheet } from "react-native";


export const styles = StyleSheet.create ({

    container:{
        backgroundColor: '#1A1A1A',
        flex: 1
    },
    backGround:{
        backgroundColor: '#0D0D0D',
        alignItems: 'center',
        paddingTop: 78, 
        height: 173,
    },
    form:{
        flexDirection: 'row',
        paddingTop: 40,
        paddingLeft: 24,
        paddingRight: 24,
    },
    input:{
        height: 54,
        width: 271,
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
    }
    

});