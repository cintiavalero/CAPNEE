import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import COLORS from '../constants/colors';
import Fondo from '../components/Fondo';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    //Validaciones para las credenciales
    const handleLogin = () => {
      if (username.trim() === '' || password.trim() === '') {
        alert('Por favor, completar todos los campos')
      } else {
        if (username === 'usuario' && password === 'contraseña') {
          alert('Inicio de sesión exitoso');
        } else {
          alert('Usuario o contraseña incorrectos');
        }
      }
    };
  
    return (
      <View style={styles.contenedorLogin}>
        {/* El color del fondo se asigna desde la propiedad backgroundColor, a partir del archivo COLORS.js */}
        <Fondo backgroundColor={COLORS.lilaShadow}>
            {/*Logo de CAPNEE*/}
            <View style={styles.logoContainer}>
                    <Image source={require('../assets/logo.png')} style={styles.logo}></Image>
            </View>
            <View style={{ flex: 1 }}></View>
            {/*Contenedor blanco con los inputs de texto y el botón de login*/}
            <View style={styles.container}>
                <Text style={styles.title}>¡Bienvenido!</Text>
                <View style={styles.inputsContainer}>

                  {/*Input para nombre de usuario*/}
                  <TextInput
                      style={styles.input}
                      placeholder="Usuario"
                      onChangeText={(text) => setUsername(text)}
                      value={username}
                  />

                  {/*Input para contraseña*/}
                  <TextInput
                      style={styles.input}
                      placeholder="Contraseña"
                      secureTextEntry
                      onChangeText={(text) => setPassword(text)}
                      value={password}
                  />

                  {/*Botón de login*/}
                  <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                      <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
                  </TouchableOpacity>

                </View>
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
  
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      width: "100%",
      backgroundColor: COLORS.white,
      borderTopLeftRadius: 70,
      borderTopRightRadius: 70,
      overflow: 'auto',
      height: '75%',
    },
    inputsContainer:{
      justifyContent: 'center',
      alignItems: 'center',
      width: "100%",
      height: 'auto',
      marginBottom: 20,
    },
    title: {
      fontSize: 55,
      fontWeight: 'bold',
      marginBottom: 30,
      color: COLORS.lilaShadow
    },
  
    input: {
      width: '80%',
      height: 70,
      backgroundColor: COLORS.grisClaro,
      borderRadius: 20,
      marginTop: 20,
      paddingHorizontal: 18,
      fontSize: 25,
      fontWeight: '400'
    },
  
    loginButton: {
      width: '80%',
      backgroundColor: COLORS.lila,
      padding: 20,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 35,
      height: 80,
    },
    
    loginButtonText: {
      color: COLORS.white,
      fontSize: 25,
      fontWeight: 'bold',
    },
  });
  
  export default Login;