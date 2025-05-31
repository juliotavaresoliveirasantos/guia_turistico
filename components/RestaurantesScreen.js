import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

export default function RestaurantesScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Restaurantes Recomendados</Text>

      <Image source={require('../assets/guaiba.jpg')} style={styles.image} /> 
      <Text style={styles.text}><Text style={styles.bold}>Churrascaria Guaiba:</Text> Tradicional na cidade, ótimo para almoço executivo e jantares em família.</Text>

      <Image source={require('../assets/bella.jpg')} style={styles.image} /> 
      <Text style={styles.text}><Text style={styles.bold}>Bella Capri:</Text> Pizzaria e massas artesanais, ambiente familiar.</Text>

      <Image source={require('../assets/banzai.jpg')} style={styles.image} /> 
      <Text style={styles.text}><Text style={styles.bold}>Banzai Sushi House:</Text> Especialidade em comida japonesa com pratos frescos e variados.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  image: { height: 200, marginBottom: 10, width: '100%' },
  text: { marginBottom: 20, fontSize: 16 },
  bold: { fontWeight: 'bold' }
});
