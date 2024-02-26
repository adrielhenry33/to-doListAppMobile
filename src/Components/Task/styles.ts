import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
	container: {
		backgroundColor: '#2E2E2E',
		alignItems: 'center',
		flexDirection: 'row', // Mantenha 'row' para alinhar os elementos horizontalmente
		borderRadius: 5,
		marginRight: 15,
		marginBottom: 15,
		marginTop: 15,
		marginLeft: 15
	},
	  name: {
		color: '#FFF',
		fontSize: 14,
		marginHorizontal: 10, // Adicione margem horizontal ao texto
		flex: 1, // Este flex vai empurrar o ícone de lixeira para a direita
	  },
	  buttonContainer: {
		flexDirection: 'row', // Exibir os ícones em linha
		alignItems: 'center',
	  },
	  circleAddButton: {
		color: '#4EA8DE',
		marginRight: 10, // Espaço entre o texto e o ícone de círculo
	  },
	  trashButton: {
		color: '#808080',
		paddingHorizontal: 10, // Espaço interno ao redor do ícone de lixeira
	  },
	
});