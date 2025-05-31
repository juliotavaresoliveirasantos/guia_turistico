import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

export default function PontosHistoricosScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Pontos Históricos</Text>

      <Image source={require('../assets/catedral.jpg')} style={styles.image} />
      <Text style={styles.text}><Text style={styles.bold}>Catedral São Sebastião:</Text> Um dos marcos da cidade, com arquitetura imponente e belíssimos vitrais.</Text>

      <Image source={require('../assets/museu.jpg')} style={styles.image} />
      <Text style={styles.text}><Text style={styles.bold}>Museu e Arquivo Histórico:</Text> Conta com acervo fotográfico, objetos e documentos históricos.</Text>

      <Image source={require('../assets/estacao.jpg')} style={styles.image} />      
      <Text style={styles.text}><Text style={styles.bold}>Estação Ferroviária:</Text> Antiga estação da cidade, importante para o desenvolvimento regional.</Text>
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
