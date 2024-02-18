import { View, Text, TouchableOpacity } from 'react-native';
import {styles} from './styles'


export default function task(){
    return(

        <View style = {styles. container}>
            <Text style = {styles.name}>
                Adriel henry
            </Text>
        
            <TouchableOpacity style = {styles.button} 
            onPress={handleTaskAdd}>
            <Text style = {styles.textButton}>
                +
            </Text>
            </TouchableOpacity>

        
        </View>

       
    );
}