
import React, { useEffect, useState } from "react";
import {  FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {Cliente} from "./interface/ClienteInterface";
import axios from "axios";


    

    const renderItem = ({ item }: { item: Cliente }) => (
        <TouchableOpacity>
        <View style={ styles.item}>
            <View style={styles.item}>
            <Text style={ styles.itemNome}>{ item.nome }</Text>
            <Text style={ styles.itemEmail}>{ item.email }</Text>
            <Text style={ styles.itemSenha}>{ item.senha }</Text>
            <Text style={ styles.itemTelefone}>{ item.telefone }</Text>
            <Text style={ styles.itemCpf}>{ item.cpf }</Text>
            <Text style={ styles.itemEndereco}>{ item.endereco }</Text>
            <Image source={item.imagem} style={styles.imagePedido} />
           
            </View>
          
        </View>
        </TouchableOpacity>
    );


    function FlatListExample(): React.JSX.Element {

        const [produtos, setProdutos] = useState<Cliente[]>([]);
        const [error, setError] = useState("");

        useEffect(() => {
            async function fetchData() {
                try {
                    const response = await axios.get<Cliente[]>('http://10.137.11.218:8000/api/CadastrarClienteIndex');
                    console.log(response.data);
                    setProdutos(response.data);
    
    
                } catch (error) {
                    setError("Ocorreu um erro");
                    console.log(error);
    
                }
    
            }
    
            fetchData();
        }, []);
        return (
            <View style={ styles.container}>
                <StatusBar backgroundColor = "red" barStyle='light-content' />
                <View style={styles.header}>
                    <Text style={styles.headerText}>ℝ𝔼ℂ 𝕕𝕠𝕟𝕒𝕝𝕕'𝕤</Text>
    
                </View>
                <FlatList   
                showsVerticalScrollIndicator= {false}
                data= {produtos}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                />
    
                <View style={styles.footer}>

                <TouchableOpacity>
                        <Image  source= {require ('./assets/images/menu.png')}
                        style={ styles.footerIcon}/>
                    </TouchableOpacity>
    
                    <TouchableOpacity>
                        <Image  source= {require ('./assets/images/home.png')}
                        style={ styles.footerIcon}/>
                    </TouchableOpacity>
    
                    <TouchableOpacity>
                        <Image  source= {require ('./assets/images/pedido.png')}
                        style={ styles.footerIcon}/>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image  source= {require ('./assets/images/perfil.png')}
                        style={ styles.footerIcon}/>
                    </TouchableOpacity>




                </View>
            </View >
            
    
    
        );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'


    },
    item: {
        backgroundColor: 'orange',
        padding: 10, 
        marginVertical: 30,
        marginHorizontal: 20,
        borderRadius: 10

    },
    header:{
        backgroundColor: 'red',
        alignItems: 'center',
        paddingVertical: 20

    },
    headerText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'yellow'

    },
    footer: {
     
        backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 20


    },
    footerIcon: {
        width: 30,
        height: 30

    },

    imagePedido: {

        height: 110,
        width: 170,
        borderRadius: 20,
       

    },

    itemNome: {
        
        fontSize: 40,
        fontWeight: 'bold',
        color: 'red',
       marginTop:-20,

       

    },

    itemEmail: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'red'

    },

    itemSenha: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'red'

    },

    itemTelefone: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'red'

    },

    itemCpf: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'red'

    },

    itemEndereco: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'yellow',
        marginVertical: 20

    },

    adicionarPedido: {

        height: 70,
        width: 70,
        borderRadius: 30,
        marginHorizontal: 200,
        marginVertical: -100,
        
        

    }



});
export default FlatListExample;
