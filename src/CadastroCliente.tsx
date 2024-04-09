import React, { useState } from "react";
import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import axios from 'axios';

const CadastroCliente: React.FC = () => {
    const [nome, setNome] = useState <string>('');
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [telefone, setTelefone] = useState<string>('');
    const [endereco, setEndereco ] = useState <string>('');
    const [imagem, setImagem] = useState<any>('');

    const cadastrarCliente = async () => { 
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

        const response = await axios.post('http://10.137.11.218:8000/api/clientes', formData, {
            headers: {
                'Content-Type':'multipart/form-data'
            }
        
        });

        console.log(response.data)
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
        <ScrollView>
        <View style={styles.container}>
            <StatusBar backgroundColor="red" barStyle= "light-content" />
            <View style={styles.header}>
                <Text style={styles.headerText}>ℝ𝔼ℂ 𝕕𝕠𝕟𝕒𝕝𝕕'𝕤</Text>
            </View>

            <TouchableOpacity style={styles.imageButtonFoto} onPress={abrirCamera}>
                <Text style={styles.imageButtonText}>Tirar Foto</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.imageButtonSelecionar} onPress={selecionarImagem}>
                <Text style={styles.imageButtonText}>Selecionar Imagem</Text>
            </TouchableOpacity>

            <View style={styles.alinhamentoImagemSelecionada}>
                    {imagem ? <Image source={{ uri: imagem }} style={styles.imagemSelecionada} /> : null}
                </View>
            

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
            



            <TouchableOpacity style={styles.imageButton } onPress={cadastrarCliente}>
                <Text style={styles.imageButtonText}>Cadastrar </Text>
            </TouchableOpacity>
            </View >

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
    form: {
        padding: 10,
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

    imageButtonFoto: {
        backgroundColor: 'orange',
        padding:10,
        borderRadius: 50,
        alignItems: 'center',
        marginBottom: 10,
        marginTop:10,
        width:100,
        marginRight:'auto',
        marginLeft:'auto',

    },

    imageButtonSelecionar: {
        backgroundColor: 'orange',
        padding:10,
        borderRadius: 50,
        marginBottom: 20,
        marginTop:10,
        width:200,
        marginRight:'auto',
        marginLeft:'auto',
        alignItems: 'center',

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

export default CadastroCliente;