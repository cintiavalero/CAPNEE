import React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import COLORS from '../src/constants/colors';
import Fondo from '../src/components/Fondo';

const Registro = () => {
    return (
        <View style={styles.contenedorVerificacion}>
            <Fondo backgroundColor={COLORS.lilaShadow}>
                <View style={styles.logoContainer}>
                    <Image source={require('../assets/logo.png')} style={styles.logo}></Image>
                </View>
                <View style={{ flex: 1 }}></View>
                
                {/*Contenedor blanco con los inputs de texto y el botón de login*/}
                <View style={styles.formContainer}>
                    <Text style={styles.title}>Registro</Text>

                    
                    <View style={styles.inputsContainer}>

                        <TextInput style={styles.input} placeholder="Nombre"/>
                        <TextInput style={styles.input} placeholder="Apellido"/>
                        <TextInput style={styles.input} placeholder="Legajo"/>
                        <TextInput style={styles.input} placeholder="Email"/>
                        <TextInput style={styles.input} placeholder="Usuario"/>
                        <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry/>
                        <TouchableOpacity style={styles.RegistroFacialButton}>
                            <Text style={styles.RegistroButtonText}>Agregar registro facial</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.RegistroButton}>
                            <Text style={styles.RegistroButtonText}>Registrar</Text>
                        </TouchableOpacity>

                    </View>
              




                             
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

    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '20%',
        marginTop: 50,
    },
        logo: {
            zIndex: 10,
            width: '55%',
            aspectRatio: 2086/380,
        },
    formContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        width: "100%",
        borderTopLeftRadius: 70,
        borderTopRightRadius: 70,
        overflow: 'auto',
        height: '85%',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: COLORS.lilaShadow,
        marginBottom: 30,
    },
    
    inputsContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        height: 'auto',
        marginBottom: 20,
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

        RegistroButton: {
            width: '80%',
            backgroundColor: COLORS.lila,
            padding: 20,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 15,
            height: 80,
        },
        RegistroButtonText: {
            color: COLORS.white,
            fontSize: 25,
            fontWeight: 'bold',
        },
        RegistroFacialButton: {
            width: '80%',
            backgroundColor: COLORS.oliva,
            padding: 20,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 35,
            height: 80,
        },


});


export default Registro;