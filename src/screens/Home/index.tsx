
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

import { styles } from './styles';

import Task from '../../Components/Task' ;

export default function Home() {
    

    const toDo = ['lavar', 'passar', 'estudar', 'cozinhar', 'ler', 'comer']; //make sure there are no identical tasks

    function handleTaskAdd(){
        console.log("Voce clicou o botao de Adicionar!");
    };
    function handleTaskRemove(name: string){
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
                

                {
                    toDo.map(nameTask =>( //cartao que ao percorrer a string  recebe cada tarefa e cria uma chave
                        <Task             // de identificacao para cada uma   
                            key={nameTask} //criando uma chave que contem o nome de cada tarefa
                            name = {nameTask} //passando o nome da tarefa forma dinamica
                            onRemove={()=> handleTaskRemove("ADriel")} 
                        />
                    ))
                }

            </View>

        </View>

    );
}