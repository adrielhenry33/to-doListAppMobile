
import { View, Text, Image, TextInput, TouchableOpacity,  FlatList} from 'react-native';

import { styles } from './styles';

import Task from '../../Components/Task' ;

export default function Home() {
    

    const nameTask = ['lavar', 'passar', 'estudar', 'cozinhar', 'ler', 'comer', 'jogar', 'batat', 'dafdfads']; //make sure there are no identical tasks

    function handleTaskAdd(){
        console.log("Voce clicou o botao de Adicionar!");
    };
    function handleTaskRemove(name: string){
        console.log("Voce clicou no botao de deletar");
    };
    
    return(

        //Criacao do plano de fundo
        <View style = {{flex: 1}}>
            <View style = {styles.blackBackGround}>
                <Image 
                    source={require('./images/Logo.png')}
                /> 
            </View>
                <View style = {styles.greyBackground}>
                
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
                                   
                    
                    <FlatList
                        data={[]} //a flat list pede os dados da lista nao e preciso fazer o map da lista
                        keyExtractor={item => item} // item percorre cada elemento da lista e adiciona uma chave para cada
                                                    // elemento que no caso sao cada uma das tarefas na string
                        renderItem={({ item }) => (
                            <Task               // de identificacao para cada uma   
                                key  = { item } //criando uma chave que contem o nome de cada tarefa
                                name = { item } //passando o nome da tarefa forma dinamica
                                onRemove={()=> handleTaskRemove("Adriel")} 
                            />
                        )} 
                        showsVerticalScrollIndicator = {false}
                        showsHorizontalScrollIndicator = {false}
                    />  
                </View>   
        </View>

    );
}