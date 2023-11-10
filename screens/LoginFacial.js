import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import COLORS from '../src/constants/colors';
import Fondo from '../src/components/Fondo';

const Loginfacial = () => {
    return (
        <View style={styles.contenedorLogin}>
            <Fondo backgroundColor={COLORS.lilaShadow}>
                <View style={styles.logoContainer}>
                    <Image source={require('../assets/logo.png')} style={styles.logo}></Image>
                </View>
                <View style={{ flex: 1 }}></View>
                {/*Contenedor blanco con los inputs de texto y el botón de login*/}
                <View style={styles.textContainer}>
                    <Text style={styles.title}>¡Bienvenido!</Text>
                    <View style={styles.camaraContainer}>cámara</View>
                </View>
            </Fondo>
        </View>
    );
};

const styles = StyleSheet.create({
    contenedorLogin: {
        flex: 1, // Usar flex para ajustar el contenido a la pantalla
        justifyContent: 'space-between',
        height: '100%',
    },
    logo: {
        zIndex: 10,
        width: '65%',
        aspectRatio: 2086/380,
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '20%',
        marginTop: 50,
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        width: "100%",
        borderTopLeftRadius: 70,
        borderTopRightRadius: 70,
        overflow: 'auto',
        height: '80%',
    },
    
    title: {
        fontSize: 55,
        fontWeight: 'bold',
        color: COLORS.lilaShadow,
        marginBottom: 30,
    },
    camaraContainer: {
        backgroundColor: COLORS.cielo,
        height: '75%',
        width: "80%",
    },
});


export default Loginfacial;