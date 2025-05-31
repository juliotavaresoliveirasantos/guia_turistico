import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Guia Turístico de Presidente Prudente</Text>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PontosHistóricos')}>
       <Image source={require('../assets/catedral.jpg')} style={styles.image} /> 
        <Text style={styles.buttonText}>Pontos Históricos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Restaurantes')}>
      <Image source={require('../assets/banzai.jpg')} style={styles.image} /> 
        <Text style={styles.buttonText}>Restaurantes Recomendados</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Atividades')}>
      <Image source={require('../assets/parquedopovo.jpg')} style={styles.image} /> 
        <Text style={styles.buttonText}>Atividades ao Ar Livre</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  button: {
    backgroundColor: 'red',
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    width: '100%'
  },
  image: {
    width: '100%',
    height: 150
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    padding: 10,
    textAlign: 'center'
  }
});
