import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default function Tempo(props) {
  return (
    <>
         <Text style={styles.title}>Previsão</Text>
          <Text style={styles.text}>Máxima: {props.data.max}°C</Text>
          <Text style=  {styles.text}>Mínima: {props.data.min}°C</Text>
          <Text style={styles.text}>Tempo: {props.data.description}</Text>
    </>
  );
}

const styles = StyleSheet.create({
    text: {
      fontSize: 20,
      marginBottom: 10,
      textAlign: 'left'
    },
    title:{
      fontSize: 24,
      fontStyle: 'italic',
      fontWeight: 'bold'
    },
});