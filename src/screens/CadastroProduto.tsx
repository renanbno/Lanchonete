import React, { useState } from "react";
import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import axios from 'axios';
import { Produto } from "../interface/ProdutoInterface";

const CadastroProduto: React.FC = () => {
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [nome, setNome] = useState <string>('');
    const [preco, setPreco] = useState<string>('');
    const [Ingredientes, setIngredientes ] = useState <string>('');
    const [imagem, setImagem] = useState<any>('');

    const CadastroProduto = async () => { 
        try{
        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('preco', preco);
        formData.append('ingredientes', Ingredientes );
        formData.append('imagem', {
            uri: imagem, 
            type: 'image/jpeg',
            name: new Date() + '.jpg'
        });
        console.log(formData)
        const response = await axios.post('http://10.137.11.218:8000/api/produto', formData, {
            headers: {
                'Content-Type':'multipart/form-data'
            }
         
        });
        console.log(response)
    } catch (error) {
        console.log (error);
    }
    }

    const abrirCamera = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        launchCamera(options, response => {
            if (response.didCancel) {
                console.log('User cancelled camera');
            } else if (response.error) {
                console.log('Camera Error: ');
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setImagem(imageUri);
                console.log(imageUri);
            }
        });
    }

    const selecionarImagem = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('Image picker error: ');
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setImagem(imageUri);
            }
        });
    };
    return (
        <ScrollView>
        <View style={styles.container}>
            <StatusBar backgroundColor="red" barStyle= "light-content" />
            <View style={styles.header}>
                <Text style={styles.headerText}>ℝ𝔼ℂ 𝕕𝕠𝕟𝕒𝕝𝕕'𝕤</Text>
            </View>
            <View style={styles.tema}>
                <Text style={styles.tema}>Cadastro do Produto:</Text>
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
                    {imagem ? <Image source={{ uri: imagem }} style={styles.imagemSelecionada} /> : null}
                </View>
            <TouchableOpacity style={styles.imageButton} onPress={selecionarImagem}>
                <Text style={styles.imageButtonText}>Selecionar Imagem</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageButton} onPress={abrirCamera}>
                <Text style={styles.imageButtonText}>Tirar Foto</Text>
            </TouchableOpacity>
            </View >
            <TouchableOpacity style={styles.imageButton }>
                <Text style={styles.imageButtonText} onPress={CadastroProduto}>Cadastrar Produto</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white'
    },

    header: {
        backgroundColor: 'red',
        alignItems: 'center',
        paddingVertical: 20

    },
    headerText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'yellow'

    },

    tema: {
        fontSize: 25,
        fontWeight: 'bold',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginRight:'auto',
        marginLeft:'auto',

    },
    form: {
        padding: 20,
        backgroundColor: '#f0f0f0',
        marginBottom: 10,
        width:350,
        borderRadius: 20,
        marginRight:'auto',
        marginLeft:'auto',

    },

    input: {
        height:40, 
        borderColor: 'gray',
        borderWidth: 2,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        width:300,
        marginRight:'auto',
        marginLeft:'auto',


    },

    imageButton: {
        
        backgroundColor: 'red',
        padding:20,
        borderRadius: 50,
        alignItems: 'center',
        marginBottom: 10,
        width:200,
        marginTop:20,
        marginRight:'auto',
        marginLeft:'auto',

    },
    imageButtonText:{
        color: 'white',
        fontWeight: 'bold',


    },

    imagemSelecionada: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 5,
        marginBottom: 10,

    },

    alinhamentoImagemSelecionada:{
        alignItems: 'center',
        borderRadius: 50,
        

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