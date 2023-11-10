import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Fondo from '../components/Fondo';
import Navbar from '../components/Navbar';
import COLORS from '../constants/colors';

const Ejercicio = () => {
  return (
    <Fondo backgroundColor={COLORS.cielo}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Título */}
        <Text style={styles.title}>Ejercicio 1</Text>

        {/* Enunciado */}
        <View style={styles.enunciadoContainer}>
          <Text style={[styles.enunciadoText, { flexWrap: 'wrap' }]}>
            Ejemplo de enunciado para una actividad. Seleccionar la opción correcta:
          </Text>
          <Image
            source={require('../assets/logo.png')}
            style={styles.enunciadoImage}
          />
        </View>

        {/* Botonera con cuatro botones */}
        <View style={styles.botonera}>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Opción 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Opción 2</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Opción 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Opción 4</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Navbar/>
    </Fondo>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    margin: 10,
    color: COLORS.lilaShadow,
  },
  enunciadoContainer: {
    alignItems: 'center',
    width: '80%',
  },
  enunciadoText: {
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.lilaShadow,
    marginBottom: 10,
  },
  enunciadoImage: {
    width: '100%', 
    height: 200,
    resizeMode: 'contain',
    marginBottom: 10,
    backgroundColor: COLORS.white,
    borderRadius: 50,
  },
  botonera: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    width: 150,
    height: 120,
    backgroundColor: COLORS.lila,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 30,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Ejercicio;