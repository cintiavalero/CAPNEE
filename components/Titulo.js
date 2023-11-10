import React from 'react';
import { Text, View, StyleSheet } from 'react-native'; // Agrega StyleSheet aquí
import COLORS from '../constants/colors';

const Titulo = (props) => {
  const { texto } = props;
  return (
    <View>
      <Text style={styles.title}>{texto}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 30,
    color: COLORS.lilaShadow,
  },
});

export default Titulo;
