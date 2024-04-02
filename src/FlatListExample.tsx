
import React from "react";
import {  FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface item {
    id: string;
    nome: string;
    preco: string;
    lista_ingredientes: string;
    image: any;
    adicionar: any;
    

}
    const dados: item[] = [

        {id: "1",
         nome: "𝐁𝐢𝐠 𝐑𝐞𝐜", 
         preco:"29,99", 
         lista_ingredientes: "Pão, Queijo, Molho",
         image: require ('./assets/images/rec1.png'),
         adicionar: require ('./assets/images/mais.png')
        },

        {id: "2",
         nome: "𝐑𝐞𝐜 𝐃𝐮𝐩𝐥𝐨",
          preco:"29,99",
           lista_ingredientes: "Pão, Queijo, Molho",
           image: require ('./assets/images/rec2.png'),
           adicionar: require ('./assets/images/mais.png')
        },

        {id: "3",
         nome: "𝐑𝐞𝐜 𝐂𝐡𝐢𝐜𝐤𝐞𝐧",
          preco:"29,99",
           lista_ingredientes: "Pão, Queijo, Molho",
           image: require ('./assets/images/rec3.png'),
           adicionar: require ('./assets/images/mais.png')
        },

        {id: "4",
         nome: "𝐑𝐞𝐜 𝐅𝐢𝐬𝐡",
          preco:"29,99",
           lista_ingredientes: "Pão, Queijo, Molho",
           image: require ('./assets/images/rec4.png'),
           adicionar: require ('./assets/images/mais.png')
        },

        {id: "5",
         nome: "𝐁𝐢𝐠 𝐑𝐞𝐜",
          preco:"29,99", 
          lista_ingredientes: "Pão, Queijo, Molho",
          image: require ('./assets/images/rec5.png'),
          adicionar: require ('./assets/images/mais.png')
        },

        {id: "6",
         nome: "𝐑𝐞𝐜 𝐭𝐫𝐢𝐩𝐥𝐨",
          preco:"29,99",
           lista_ingredientes: "Pão, Queijo, Molho",
           image: require ('./assets/images/rec6.png'),
           adicionar: require ('./assets/images/mais.png')
        },
        {id: "7",
         nome: "𝐑𝐞𝐜 𝐜𝐡𝐞𝐚𝐬𝐞", 
         preco:"29,99",
          lista_ingredientes: "Pão, Queijo, Molho",
          image: require ('./assets/images/rec7.png'),
          adicionar: require ('./assets/images/mais.png')
        },

        {id: "8",
         nome: "𝐑𝐞𝐜 𝐒𝐢𝐦𝐩𝐥𝐞𝐬",   
          preco:"29,99",
           lista_ingredientes: "Pão, Queijo, Molho",
           image: require ('./assets/images/rec8.png'),
           adicionar: require ('./assets/images/mais.png')
        },

        {id: "9",
         nome: "𝐑𝐞𝐜 𝐓𝐮𝐝𝐨",
          preco:"29,99",
           lista_ingredientes: "Pão, Queijo, Molho",
           image: require ('./assets/images/rec9.png'),
           adicionar: require ('./assets/images/mais.png')
        },

        {id: "10",
         nome: "𝐑𝐞𝐜 𝐋𝐚𝐧𝐜𝐡𝐞 𝐅𝐞𝐥𝐢𝐳",
          preco:"29,99",
           lista_ingredientes: "Pão, Queijo, Molho",
           image: require ('./assets/images/rec10.png'),
           adicionar: require ('./assets/images/mais.png')
        },
        {id: "11",
         nome: "𝐑𝐞𝐜 𝐁𝐮𝐫𝐠𝐮𝐞𝐫",
          preco:"29,99", 
          lista_ingredientes: "Pão, Queijo, Molho",
          image: require ('./assets/images/rec11.png'),
          adicionar: require ('./assets/images/mais.png')
        },

        {id: "12",
         nome: "𝐑𝐞𝐜 𝐕𝐞𝐠",
          preco:"29,99", 
          lista_ingredientes: "Pão, Queijo, Molho",
          image: require ('./assets/images/rec12.png'),
          adicionar: require ('./assets/images/mais.png')
        },

        {id: "13",
         nome: "𝐑𝐞𝐜 𝐁𝐢𝐠", 
         preco:"29,99", 
         lista_ingredientes: "Pão, Queijo, Molho",
         image: require ('./assets/images/rec13.png'),
         adicionar: require ('./assets/images/mais.png')
        },

        {id: "14",
         nome: "𝐑𝐞𝐜 𝐇𝐨𝐭",
          preco:"29,99",
           lista_ingredientes: "Pão, Queijo, Molho",
           image: require ('./assets/images/rec14.png'),
           adicionar: require ('./assets/images/mais.png')
        },

        {id: "15",
         nome: "𝐁𝐢𝐠 𝐒𝐮𝐩𝐫𝐞𝐦𝐨",
          preco:"29,99",
           lista_ingredientes: "Pão, Queijo, Molho",
           image: require ('./assets/images/rec15.png'),
           adicionar: require ('./assets/images/mais.png')
        },

        
        
        


    ];
    

    const renderItem = ({ item }: { item: item }) => (
        <View style={ styles.item}>
            <View style={styles.item}>
            <Text style={ styles.itemNome}>{ item.nome }</Text>
            <Text style={ styles.itemPreco}>{ item.preco }</Text>
            <Text style={ styles.itemIngrediente}>{ item.lista_ingredientes }</Text>
            <Image source={item.image} style={styles.imagePedido} />
            <TouchableOpacity><Image source={item.adicionar} style={styles.adicionarPedido} /></TouchableOpacity>
            

            </View>
        </View>
    );


    function FlatListExample(): React.JSX.Element {
        return (
            <View style={ styles.container}>
                <StatusBar backgroundColor = "red" barStyle='light-content' />
                <View style={styles.header}>
                    <Text style={styles.headerText}>ℝ𝔼ℂ 𝕕𝕠𝕟𝕒𝕝𝕕'𝕤</Text>
    
                </View>
                <FlatList   
                showsVerticalScrollIndicator= {false}
                data= {dados}
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
        
        

    }



});
export default FlatListExample;
