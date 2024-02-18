
import { View, Text, Image, TextInput, Button, TouchableOpacity } from 'react-native';

import {styles} from './styles';



export default function Home() {
    return(

        //Criacao do plano de fundo
        <View style = {styles.container}>

            <View style = {styles.backGround}>
                <Image 
                source={require('./images/Logo.png')}
                /> 
                
                <View style = { styles.form }>
                    
                    <TextInput
                    style = { styles.input }
                    placeholder='Adicione uma tarefa q'
                    placeholderTextColor="#6B6B6B"
                    />
                    
                    <TouchableOpacity style = {styles.button}>
                        <Text style = {styles.textButton}>
                            +
                        </Text>
                    </TouchableOpacity>

                </View>
                


            </View>

        </View>

    );
}