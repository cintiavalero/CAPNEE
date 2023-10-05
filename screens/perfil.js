import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Navbar from '../components/Navbar';

export default function Profile() {
  return (
    <View style={styles.content}>
      {/* Imagen y Nombre del Usuario */}
      <Image source={require('../img/logo.png')} style={styles.logo} />
      <Text style={styles.usuario}>Usuario</Text>
      {/* Datos */}
      <View style={styles.details}>
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
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.sesionButton}>
          <Text style={styles.buttonText}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>
      <Navbar/>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '10%',
  },
  logo: {
    width: 142,
    height: 142,
  },
  usuario: {
    fontSize: 32,
    color: '#B28CF6',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
  },
  details: {
    top: '5%',
    backgroundColor: '#B28CF6',
    borderRadius: 26,
    width: 281,
    height: '45%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  detailsTitlesText: {
    marginTop: 40,
    marginLeft: '5%',
    fontSize: 26,
    bottom: '5%',
    color: '#fff',
    textAlign: 'left',
  },
  detailsResultsText: {
    marginTop: 40,
    marginRight: '5%',
    fontSize: 26,
    bottom: '5%',
    color: '#000',
    textAlign: 'right',
  },
  detailsTitles: {
    marginLeft: '5%',
    textAlign: 'left',
  },
  detailsResults: {
    marginRight: '5%',
    textAlign: 'right',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sesionButton: {
    marginTop: '20%',
    backgroundColor: '#FC5F72',
    borderRadius: 28,
    overflow: 'hidden',
    width: 281,
    height: '90%',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});
