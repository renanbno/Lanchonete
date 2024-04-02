import React, { useState } from "react";
import { Image, StatusBar, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import { launchCamera } from "react-native-image-picker";
const CadastroProduto: React.FC = () => {
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [nome, setNome] = useState <string>('');
    const [preco, setPreco] = useState<string>('');
    const [Ingredientes, setIngredientes ] = useState <string>('');
    const [imagem, setImagem] = useState<any>('');

    const CadastroProduto = async () => {

    }

    const abrirCamera = () => {
        const options = {
            midiaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        launchCamera (options, response => {
            if(response.didCancel){
                console.log('canselado pelo usuario');
            } else if (response.error){
                console.log ('erro ao abrir a camera');
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setImagem(imageUri);
                console.log(imageUri);
            }
        })
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="red" barStyle= "light-content" />
            <View style={styles.header}>
                <Text style={styles.headerText}>Top Food</Text>
            </View>
            <View style={styles.form}>
                <TextInput
                style={styles.input}
                placeholder="Nome Produto"
                value={nome}
                onChangeText={setNome}
                />

                <TextInput
                style = {styles.input}
                placeholder="Preço"
                value={preco}
                onChangeText={setPreco}
                />
                <TextInput
                style = {styles.input}
                placeholder="Ingredientes"
                value={Ingredientes}
                onChangeText={setIngredientes}
                multiline />
            

            <View style={styles.alinhamentoImagemSelecionada}>
                {imagem ? <Image source= {{ uri: imagem }} style={styles.alinhamentoImagemSelecionada } />: null}
            </View>
            <TouchableOpacity style={styles.imageButton}>
                <Text style={styles.imageButtonText}>Selecionar Imagem</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageButton} onPress={abrirCamera}>
                <Text style={styles.imageButtonText}>Tirar Foto</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageButton}>
                <Text style={styles.imageButtonText}>Cadastrar Produto</Text>
            </TouchableOpacity>
            </View >

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex:1
    },

    header: {
        backgroundColor: 'red',

    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',

    },
    form: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        marginBottom: 10
    },

    input: {
        height:40, 
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10
    },

    imageButton: {
        backgroundColor: 'red',
        padding:10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10
    },
    imageButtonText:{
        color: 'white',
        fontWeight: 'bold',


    },

    imageSelecionada: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 5,
        marginBottom: 10,

    },

    alinhamentoImagemSelecionada:{
        alignItems: 'center'

    },

    button: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
     
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    }


})

export default CadastroProduto;