import React from 'react';
import { Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Fondo from '../src/components/Fondo';
import Navbar from '../src/components/Navbar';
import COLORS from '../src/constants/colors';

const SeleccionTema = ({ navigation }) => {
    return (
      <Fondo backgroundColor={COLORS.cielo}>
        <ScrollView contentContainerStyle={styles.container}>
          {/*Logo*/}
          <Image
              source={require('../src/img/logoSeleccionTema.png')}
              style={styles.logoImage}
            />
  
          {/* Título */}
          <Text style={styles.title}>¡A Resolver!</Text>
  
          {/* Botones */}
          <TouchableOpacity style={[styles.button, styles.addMathButton]} onPress={navigation.navigate("SeleccionNivel")}>
            <Text style={styles.textButton}>Suma y Resta</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.multiplicationButton]}>
            <Text style={styles.textButton}>Multiplicación</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.divisionButton]}>
            <Text style={styles.textButton}>División</Text>
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
    addMathButton: {
      backgroundColor: COLORS.lilaShadow,
    },
    multiplicationButton: {
      backgroundColor: COLORS.lila,
    },
    divisionButton: {
      backgroundColor: COLORS.lila,
    },
    textButton: {
      color: COLORS.white,
      fontSize: 32,
      fontWeight: 'bold',
    },
  });
  
  export default SeleccionTema;