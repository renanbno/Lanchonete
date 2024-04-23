import React from 'react';
import Cardapio from './src/Cardapio';
import CadastroProduto from './src/screens/CadastroProduto';
import CadastroCliente from './src/CadastroCliente';
import ListagemCliente from './src/ListagemCliente';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function App(): React.JSX.Element {

  
const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Cardapio' component={Cardapio}
        options={{ headerShown: false}}/>
        <Stack.Screen name='CadastroProduto' component={CadastroProduto}
        options={{ headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;