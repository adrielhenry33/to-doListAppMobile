
import { View, Text, Image, TextInput } from 'react-native';

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
                    placeholder='Nome da tarefa'
                    />
                </View>

            </View>

        </View>

    );
}