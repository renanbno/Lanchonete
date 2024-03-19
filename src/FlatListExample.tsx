
import React from "react";
import {  FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface item {
    id: string;
    nome: string;
    preco: string;
    lista_ingredientes: string;
    image: any;
    

}
    const dados: item[] = [

        {id: "1",
         nome: "Big Rec",
         preco:"29,99", 
         lista_ingredientes: "Pão, Queijo, Molho",
         image: require ('./assets/images/rec1.png')
        },

        {id: "2",
         nome: "Rec Duplo",
          preco:"29,99",
           lista_ingredientes: "Pão, Queijo, Molho",
           image: require ('./assets/images/rec1.png')
        },

        {id: "3",
         nome: "Rec Chicken",
          preco:"29,99",
           lista_ingredientes: "Pão, Queijo, Molho",
           image: require ('./assets/images/rec1.png')
        },

        {id: "4",
         nome: "Rec Fish",
          preco:"29,99",
           lista_ingredientes: "Pão, Queijo, Molho",
           image: require ('./assets/images/rec1.png')
        },

        {id: "5",
         nome: "Big Rec",
          preco:"29,99", 
          lista_ingredientes: "Pão, Queijo, Molho",
          image: require ('./assets/images/rec1.png')
        },

        {id: "6",
         nome: "Rec triplo",
          preco:"29,99",
           lista_ingredientes: "Pão, Queijo, Molho",
           image: require ('./assets/images/rec1.png')
        },
        {id: "7",
         nome: "Rec chease", 
         preco:"29,99",
          lista_ingredientes: "Pão, Queijo, Molho",
          image: require ('./assets/images/rec1.png')
        },

        {id: "8",
         nome: "Rec Simples",
          preco:"29,99",
           lista_ingredientes: "Pão, Queijo, Molho",
           image: require ('./assets/images/rec1.png')
        },

        {id: "9",
         nome: "Rec Tudo",
          preco:"29,99",
           lista_ingredientes: "Pão, Queijo, Molho",
           image: require ('./assets/images/rec1.png')
        },

        {id: "10",
         nome: "Rec Egg",
          preco:"29,99",
           lista_ingredientes: "Pão, Queijo, Molho",
           image: require ('./assets/images/rec1.png')
        },
        {id: "11",
         nome: "Rec Burguer",
          preco:"29,99", 
          lista_ingredientes: "Pão, Queijo, Molho",
          image: require ('./assets/images/rec1.png')
        },

        {id: "12",
         nome: "Rec Veg",
          preco:"29,99", 
          lista_ingredientes: "Pão, Queijo, Molho",
          image: require ('./assets/images/rec1.png')
        },

        {id: "13",
         nome: "Rec Lanche Feliz", 
         preco:"29,99", 
         lista_ingredientes: "Pão, Queijo, Molho",
         image: require ('./assets/images/rec1.png')
        },

        {id: "14",
         nome: "Rec Hot",
          preco:"29,99",
           lista_ingredientes: "Pão, Queijo, Molho",
           image: require ('./assets/images/rec1.png')
        },

        {id: "15",
         nome: "Big Supremo",
          preco:"29,99",
           lista_ingredientes: "Pão, Queijo, Molho",
           image: require ('./assets/images/rec1.png')
        },

        
        
        


    ];
    

    const renderItem = ({ item }: { item: item }) => (
        <View style={ styles.item}>
            <TouchableOpacity style={styles.item}>
            <Text>{ item.nome }</Text>
            <Text>{ item.preco }</Text>
            <Text>{ item.lista_ingredientes }</Text>
            <Image source={item.image} style={styles.imagePedido} />

            </TouchableOpacity>
        </View>
    );


    function FlatListExample(): React.JSX.Element {
        return (
            <View style={ styles.container}>
                <StatusBar backgroundColor = "red" barStyle='light-content' />
                <View style={styles.header}>
                    <Text style={styles.headerText}>REC donald's</Text>
    
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


    },
    item: {
        backgroundColor: 'yellow',
        padding: 20, 
        marginVertical: 8,
        marginHorizontal: 16

    },
    header:{
        backgroundColor: 'red',
        alignItems: 'center',
        paddingVertical: 50
    },
    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'

    },
    footer: {
        borderTopWidth: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 30


    },
    footerIcon: {
        width: 30,
        height: 30

    },

    imagePedido: {

        height: 150,
        width: 140,
        
    }


});
export default FlatListExample;
