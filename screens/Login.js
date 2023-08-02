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
        //El color del fondo se asigna desde la propiedad backgroundColor, a partir del archivo COLORS.js
        <Fondo backgroundColor={COLORS.lilaShadow}>
            {/*Logo de CAPNEE*/}
            <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
            >
            </Image>

            {/*Contenedor blanco con los inputs de texto y el botón de login*/}
            <View style={styles.container}>
                <Text style={styles.title}>¡Bienvenido!</Text>

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
        </Fondo>
    );
  };
  
  const styles = StyleSheet.create({
    logo: {
      width: '100%',
      height: 150,
      position: 'absolute',
      top: 125
    },
  
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.white,
      height: "65%",
      width: "100%",
      borderRadius: 70,
      paddingBottom: 150,
      marginTop: 400
    },
  
    title: {
      fontSize: 35,
      fontWeight: 'bold',
      marginBottom: 30,
      color: COLORS.lilaShadow
    },
  
    input: {
      width: '80%',
      height: 50,
      backgroundColor: COLORS.grisClaro,
      borderRadius: 20,
      marginBottom: 15,
      paddingHorizontal: 18,
      fontSize: 25,
      padding: 35,
      fontWeight: '400'
    },
  
    loginButton: {
      width: '80%',
      backgroundColor: COLORS.lila,
      padding: 20,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 15,
    },
    
    loginButtonText: {
      color: COLORS.white,
      fontSize: 25,
      fontWeight: '650',
    },
  });
  
  export default Login;