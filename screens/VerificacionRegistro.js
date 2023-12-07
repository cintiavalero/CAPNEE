import React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import COLORS from '../src/constants/colors';
import Fondo from '../src/components/Fondo';

const VerificacionRegistro = () => {
    return (
        <View style={styles.contenedorVerificacion}>
            <Fondo backgroundColor={COLORS.lilaShadow}>
                <View style={styles.logoContainer}>
                    <Image source={require('../assets/logo.png')} style={styles.logo}></Image>
                </View>
                <View style={{ flex: 1 }}></View>
                {/*Contenedor blanco con los inputs de texto y el botón de login*/}
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Verificación</Text>
                    <Text style={styles.description}>Ingrese un código de verificación para verificar sus permisos</Text>
                    <TextInput style={styles.input} placeholder="Código"></TextInput>
                    <Text style={styles.textLink}>¿Cómo obtengo el código?</Text>
                    <TouchableOpacity style={styles.verificacionButton}>
                      <Text style={styles.verificacionButtonText}>Continuar y registrar</Text>
                    </TouchableOpacity>              
                </View>
            </Fondo>
        </View>
    );
};

const styles = StyleSheet.create({
    contenedorVerificacion: {
        flex: 1, // Usar flex para ajustar el contenido a la pantalla
        justifyContent: 'space-between',
        height: '100%',
        width: '100%',
    },
    logo: {
        zIndex: 10,
        width: '55%',
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
        height: '75%',
    },
    
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: COLORS.lilaShadow,
        marginBottom: 30,
    },
    description: {
        fontSize: 20,
        color: COLORS.lilaShadow,
        textAlign: 'center',
    },
    input: {
        width: '80%',
        height: 70,
        backgroundColor: COLORS.grisClaro,
        borderRadius: 20,
        marginTop: 20,
        paddingHorizontal: 18,
        fontSize: 25,
        textAlign: 'center',
    },
    textLink:{
        color: COLORS.cielo,
        fontSize: 20,
    },
    verificacionButton: {
        width: '80%',
        backgroundColor: COLORS.lila,
        padding: 20,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 35,
        height: 80,
    },
    verificacionButtonText: {
        color: COLORS.white,
        fontSize: 25,
        fontWeight: 'bold',
    },

});


export default VerificacionRegistro;