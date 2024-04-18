
import React, { useEffect, useState } from "react";
import {  FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Produto } from "./interface/ProdutoInterface";
import axios from "axios";


    

    const renderItem = ({ item }: { item: Produto }) => (
        <TouchableOpacity>
        <View style={ styles.item}>
            <View style={styles.item}>
            <Text style={ styles.itemNome}>{ item.nome }</Text>
            <Text style={ styles.itemPreco}>{ item.preco }</Text>
            <Text style={ styles.itemIngrediente}>{ item.ingredientes }</Text>
            <Image source={item.imagem} style={styles.imagePedido} />
            </View>
          
        </View>
        </TouchableOpacity>
    );


    function FlatListExample(): React.JSX.Element {

        const [produtos, setProdutos] = useState<Produto[]>([]);
        const [error, setError] = useState("");

        useEffect(() => {
            async function fetchData() {
                try {
                    const response = await axios.get<Produto[]>('http://10.137.11.218:8000/api/produtoIndex');
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
                <TouchableOpacity style={styles.imageButton }>
                <Text style={styles.imageButtonText} onPress={renderItem}>Cadastrar Produto</Text>
                </TouchableOpacity>

                
    
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

    itemPreco: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'red'

    },

    itemIngrediente: {
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



});
export default FlatListExample;
