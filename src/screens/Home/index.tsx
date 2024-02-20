
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

import { styles } from './styles';

import Task from '../../Components/Task' ;

export default function Home() {
    
    function handleTaskAdd(){
        console.log("Voce clicou o botao de Adicionar!");
    };
    function handleTaskRemove(){
        console.log("Voce clicou no botao de deletar");
    };
    
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
                    placeholder='Adicione uma tarefa '
                    placeholderTextColor="#6B6B6B"
                    />
                    
                    <TouchableOpacity style = {styles.button} onPress={handleTaskAdd}>
                        <Text style = {styles.textButton}>
                            +
                        </Text>
                    </TouchableOpacity>

                </View>
                
                <Task name = 'dias' onRemove={handleTaskRemove} />
                
            </View>

        </View>

    );
}