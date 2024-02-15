
import { View, Text, Image } from 'react-native';

import {styles} from './styles';



export default function Home() {
    return(

        //Criacao do plano de fundo
        <View style = {styles.container}>

            <View style = {styles.image}>
                <Image 
                source={require('./images/Logo.png')}
                />
            </View>
            
        </View>

    );
}