import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

import Icon from 'react-native-vector-icons/Entypo'; // Importe o componente de ícone


type Props ={
    name: string;
}

export default function Task({name}: Props){
    return(

        <View style = {styles. container}>
                <TouchableOpacity style = {styles.container}>
                    <Icon 
                    name='circle'
                    style ={styles.circleAddButton}

                    size={20} 
                    />
                    
                    <Text style = {styles.name}>
                    {name}
                    </Text>
                    
                    <Icon 
                    name='trash'
                    style = {styles.trashButton}
                    size={20}
                    />               
                </TouchableOpacity>
        </View>
    );
}