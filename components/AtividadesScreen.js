import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

export default function AtividadesScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Atividades ao Ar Livre</Text>
        <Image source={require('../assets/parquedopovo.jpg')} style={styles.image} />      
        <Text style={styles.text}><Text style={styles.bold}>Parque do Povo:</Text> Um dos maiores parques urbanos do interior paulista, ideal para caminhadas, corridas e lazer em família.</Text>

      <Image source={require('../assets/pruden.jpg')} style={styles.image} />
      <Text style={styles.text}><Text style={styles.bold}>PrudenShopping:</Text> O melhor shopping de Presidente Prudente, com uma grande variedade de lojas e restaurantes.</Text>

      <Image source={require('../assets/centro.jpg')} style={styles.image} />
      <Text style={styles.text}><Text style={styles.bold}>Centro Olímpico:</Text> Estrutura para esportes variados, incluindo natação, atletismo e tênis.</Text>
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
