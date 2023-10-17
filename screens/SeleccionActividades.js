import React from 'react';
import { Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Fondo from '../src/components/Fondo';
import Navbar from '../src/components/Navbar';
import COLORS from '../src/constants/colors';

//Imagenes
import candado from '../src/img/candado.png';
import estrellas from '../src/img/estrellas.png';
import { View } from 'react-native-web';

const SeleccionActividades = () => {
    return (
      <Fondo backgroundColor={COLORS.cielo}>
        <ScrollView contentContainerStyle={styles.container}>
        {/*Logo*/}
        <Image
            source={require('../src/img/logoSeleccionTema.png')}
            style={styles.logoImage}
        /> 

        {/* Título */}
        <Text style={styles.title}>Suma y Resta</Text>
  
        {/* Botones */}
          <TouchableOpacity style={[styles.button, styles.nivel1Button]}>
            <Text style={styles.textButton}>Actividad 1</Text>
            <View style={styles.estrellasContainer}>
                <Image source={estrellas} style={[styles.estrellaImg, styles.estrellaDorada]}/>
                <Image source={estrellas} style={[styles.estrellaImg, styles.estrellaDorada]}/>
                <Image source={estrellas} style={[styles.estrellaImg, styles.estrellaDorada]}/>
                <Image source={estrellas} style={styles.estrellaImg}/>
                <Image source={estrellas} style={styles.estrellaImg}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.nivel2Button]}>
            <Image source={candado} style={styles.candadoImg} />
            <Text style={styles.textButton}>Actividad 2</Text>
            <View style={styles.estrellasContainer}>
                <Image source={estrellas} style={styles.estrellaImg}/>
                <Image source={estrellas} style={styles.estrellaImg}/>
                <Image source={estrellas} style={styles.estrellaImg}/>
                <Image source={estrellas} style={styles.estrellaImg}/>
                <Image source={estrellas} style={styles.estrellaImg}/>
            </View>
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
    button: {
      width: 281,
      height: 95,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
      borderRadius: 30,
    },
    nivel1Button: {
      backgroundColor: COLORS.lilaShadow,
    },
    nivel2Button: {
      backgroundColor: COLORS.gris,
    },
    nivel3Button: {
      backgroundColor: COLORS.gris,
    },
    textButton: {
      color: COLORS.white,
      fontSize: 32,
      fontWeight: 'bold',
    },
    candadoImg: {
        width: 25,
        height: 25,
        marginLeft: '80%',
        marginBottom: '15%',
        position: 'absolute',
    },
    estrellasContainer: {
        flexDirection: 'row',
    },
    estrellaDorada: {
        tintColor: COLORS.amarillo,
    },
    estrellaImg: {
        width: 15,
        height: 15,
    }
  });
  
  export default SeleccionActividades;