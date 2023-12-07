import React from 'react';
import { Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Fondo from '../src/components/Fondo';
import Navbar from '../src/components/Navbar';
import COLORS from '../src/constants/colors';

const MenuPrincipal = ({ navigation }) => {
  return (
    <Fondo backgroundColor={COLORS.oliva}>
      <ScrollView contentContainerStyle={styles.container}>

        {/* Notificaciones */}
        <TouchableOpacity style={styles.campanaButton}>
          <Image 
            source={require('../src/img/campana.png')}
            style={styles.campanaImage}
          />
        </TouchableOpacity>

        {/*Logo*/}
        <Image
            source={require('../src/img/logoMenuPrincipal.png')}
            style={styles.logoImage}
          />

        {/* Título */}
        <Text style={styles.title}>¡Hola de nuevo, Usuario/a!</Text>

        {/* Botones */}
        <TouchableOpacity style={[styles.button, styles.joinButton]}>
          <Text style={styles.textButton}>Unirse</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.solveButton]} onPress={() => navigation.navigate('SeleccionTema')}>
          <Text style={styles.textButton}>¡Resolver!</Text>
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
  campanaButton: {
    width: 60,
    height: 60,
    marginLeft: '70%',
    backgroundColor: COLORS.melon,
    borderRadius: 50,
  },
  campanaImage: {
    marginTop: 8,
    height: 40,
    width: '100%',
    resizeMode: 'contain',
  },
  button: {
    width: 281,
    height: 95,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 30,
  },
  joinButton: {
    backgroundColor: COLORS.gris,
  },
  solveButton: {
    backgroundColor: COLORS.lila,
  },
  textButton: {
    color: COLORS.white,
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default MenuPrincipal;