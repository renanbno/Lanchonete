import React, { useState } from "react";
import { Image, StatusBar, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import axios from 'axios';

const CadastroProduto: React.FC = () => {
    const [nome, setNome] = useState <string>('');
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [telefone, setTelefone] = useState<string>('');
    const [endereco, setEndereco ] = useState <string>('');
    const [imagem, setImagem] = useState<any>('');

    const CadastroCliente = async () => { 
        try{
        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('email', email);
        formData.append('senha', senha);
        formData.append('telefone', telefone);
        formData.append('endereco', endereco);
        formData.append('imagem', {
            uri: imagem, 
            type: 'image/jpeg',
            name: new Date() + '.jpg'
        });

        const response = await axios.post('http://10.137.11.218:8000/api/produtos', formData, {
            headers: {
                'Content-Type':'multipart/form-data'
            }
        
        });
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
                console.log('Camera Error: ', response.error);
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
                console.log('Image picker error: ', response.error);
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setImagem(imageUri);
            }
        });
    };
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="red" barStyle= "light-content" />
            <View style={styles.header}>
                <Text style={styles.headerText}>ℝ𝔼ℂ 𝕕𝕠𝕟𝕒𝕝𝕕'𝕤</Text>
            </View>
            <View style={styles.alinhamentoImagemSelecionada}>
                    {imagem ? <Image source={{ uri: imagem }} style={styles.imagemSelecionada} /> : null}
                </View>

            <TouchableOpacity style={styles.imageButtonFoto} onPress={abrirCamera}>
                <Text style={styles.imageButtonText}>Tirar Foto</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.imageButtonSelecionar} onPress={selecionarImagem}>
                <Text style={styles.imageButtonText}>Selecionar Imagem</Text>
            </TouchableOpacity>
            

            <View style={styles.form}>
                <TextInput
                style={styles.input}
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
                />
                <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                />
                <TextInput
                style = {styles.input}
                placeholder="Senha"
                value={senha}
                onChangeText={setSenha}
                />
                <TextInput
                style = {styles.input}
                placeholder="Telefone"
                value={telefone}
                onChangeText={setTelefone}
                />
                <TextInput
                style = {styles.input}
                placeholder="Endereço"
                value={endereco}
                onChangeText={setEndereco}
                multiline />
            



            <TouchableOpacity style={styles.imageButton } onPress={CadastroProduto}>
                <Text style={styles.imageButtonText}>Cadastrar </Text>
            </TouchableOpacity>
            </View >

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'blue'
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

    imageButtonFoto: {
        backgroundColor: 'orange',
        padding:10,
        borderRadius: 50,
        alignItems: 'center',
        marginBottom: 10,
        marginTop:20,

    },

    imageButtonSelecionar: {
        backgroundColor: 'orange',
        padding:10,
        borderRadius: 50,
        alignItems: 'center',
        marginBottom: 20,
        marginTop:20,
    },

    imageButton: {
        
        backgroundColor: 'red',
        padding:30,
        borderRadius: 50,
        alignItems: 'center',
        marginBottom: 10,
        marginTop:20,

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