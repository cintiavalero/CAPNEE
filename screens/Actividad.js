import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Fondo from '../components/Fondo';
import COLORS from '../constants/colors';

const Ejercicio = () => {
  return (
    <Fondo backgroundColor={COLORS.cielo}>
      <View style={styles.container}>
        {/* Título */}
        <Text style={styles.title}>Ejercicio 1</Text>

        {/* Enunciado */}
        <View style={styles.enunciadoContainer}>
          <Text style={styles.enunciadoText}>
            Enunciado
          </Text>
          <Image
            source={require('../assets/logo.png')}
            style={styles.enunciadoImage}
          />
        </View>

        {/* Botonera con cuatro botones */}
        <View style={styles.botonera}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Opción 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Opción 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Opción 3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Opción 4</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Navbar */}
      <View style={styles.navBar}>
        <View style={styles.navMenu} />
        <View style={styles.navOptions}>
          {/* Aquí colocar tus elementos del navbar */}
        </View>
      </View>
    </Fondo>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    margin: 10,
    color: COLORS.lilaShadow
  },
  enunciadoContainer: {
    alignItems: 'center',
    width: '80%'
  },
  enunciadoText: {
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.lilaShadow,
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  enunciadoImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
    backgroundColor: COLORS.white,
    borderRadius: 50,
  },
  botonera: {
    flexDirection: 'row',
    flexWrap: 'wrap',
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
    flexWrap: 'wrap',
  },
  navBar: {
    backgroundColor: COLORS.white,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopEndRadius: 20,
    borderTopLeftRadius: 20,
  },
  navMenu: {
    top: '8%',
    backgroundColor: '#FFF',
    width: '100%',
    height: '10%',
    borderTopEndRadius: 20,
    borderTopLeftRadius: 20,
  },
  navOptions: {
    width: '70%',
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    bottom: '1%',
    alignSelf: 'center',
  },
});

export default Ejercicio;
