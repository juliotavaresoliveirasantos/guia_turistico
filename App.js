import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './components/HomeScreen';
import PontosHistoricosScreen from './components/PontosHistoricosScreen';
import RestaurantesScreen from './components/RestaurantesScreen';
import AtividadesScreen from './components/AtividadesScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Menu Principal' }} />
        <Stack.Screen name="PontosHistóricos" component={PontosHistoricosScreen} options={{ title: 'Pontos Históricos' }} />
        <Stack.Screen name="Restaurantes" component={RestaurantesScreen} options={{ title: 'Restaurantes' }} />
        <Stack.Screen name="Atividades" component={AtividadesScreen} options={{ title: 'Atividades ao Ar Livre' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
