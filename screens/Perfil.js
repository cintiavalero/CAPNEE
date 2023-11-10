import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Fondo from '../src/components/Fondo';
import Navbar from '../src/components/Navbar';
import COLORS from '../src/constants/colors';

//Imagenes


const Perfil = () => {
  return (
    <Fondo backgroundColor={COLORS.amarillo}>
      <ScrollView contentContainerStyle={styles.container}>
        {/*Logo*/}
        <Image
            source={require('../src/img/logoPerfil.png')}
            style={styles.logoImage}
          />

        {/* Título */}
        <Text style={styles.title}>Usuario/a</Text>

        {/* Información del Perfil */}
        <View style={styles.detailsContainer}>
          <View style={styles.detailsTitles}>
            <Text style={styles.detailsTitlesText}>Legajo:</Text>
            <Text style={styles.detailsTitlesText}>Curso:</Text>
            <Text style={styles.detailsTitlesText}>Promedio:</Text>
            <Text style={styles.detailsTitlesText}>Nota final:</Text>
          </View>
          <View style={styles.detailsResults}>
            <Text style={styles.detailsResultsText}>99999</Text>
            <Text style={styles.detailsResultsText}>1° A</Text>
            <Text style={styles.detailsResultsText}>8.5</Text>
            <Text style={styles.detailsResultsText}>-</Text>
          </View>
        </View>

        {/* Botones */}
        <TouchableOpacity style={[styles.button, styles.sesionButton]}>
          <Text style={styles.textButton}>Cerrar Sesión</Text>
        </TouchableOpacity>
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
  logoImage: {
    width: '100%', 
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,
    borderRadius: 50,
  },
  detailsContainer: {
    backgroundColor: COLORS.lila,
    borderRadius: 30,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  detailsTitlesText: {
    width: '100%',
    marginBottom: 20,
    marginLeft: '5%',
    fontSize: 26,
    bottom: '5%',
    color: COLORS.white,
    textAlign: 'left',
  },
  detailsResultsText: {
    width: '100%',
    marginBottom: 20,
    marginRight: '5%',
    fontSize: 26,
    bottom: '5%',
    color: COLORS.black,
    textAlign: 'right',
  },
  detailsTitles: {
    marginTop: 15,
    marginLeft: '5%',
    textAlign: 'left',
  },
  detailsResults: {
    marginTop: 15,
    marginRight: '5%',
    textAlign: 'right',
  },
  button: {
    width: '80%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 30,
  },
  sesionButton: {
    backgroundColor: COLORS.melon,
  },
  textButton: {
    color: COLORS.white,
    fontSize: 26,
    fontWeight: 'bold',
  },
});

  export default Perfil;