import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
//import BackgroundImage from './components/backgroundImage';
//import Profile from './screens/perfil';
import Actividad from './screens/Actividad';
//import Login from './screens/Login';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Actividad/>
      <StatusBar style="auto"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


//Probar pantalla perfil
/*
 return (
    <SafeAreaView style={styles.container}>
      <BackgroundImage>
        <Profile />
      </BackgroundImage>
      <StatusBar style="auto" />
    </SafeAreaView>
  ); 
*/