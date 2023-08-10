import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, Button, SafeAreaView } from 'react-native';

// Perfil

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Fondo de la pantalla */}
      <ImageBackground source={require('./img/background.png')} style={styles.backgroundImage}>
        <View style={styles.content}>
          {/* Imagen y Nombre del Usuario */}
          <Image source={require('./img/logo.png')} style={styles.logo} />
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
          <View style={styles.sesionButton}>
            <Button
              title="Cerrar sesión"
              color="#FC5F72"
              href='https://google.com'
            />
          </View>
          <View style={styles.navMenu}/>
            <View style={styles.navOptions}>
              <Image source={require('./img/nav/tasks.png')} style={styles.tasks}/>
              <Image source={require('./img/nav/home.png')} style={styles.home}/>
              <Image source={require('./img/nav/students.png')} style={styles.students}/>
            </View>
          </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
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
    borderRadius: 30,
    width: 281,
    height: '40%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  detailsTitlesText: {
    marginTop: 30,
    marginLeft: '5%', 
    fontSize: 26,
    bottom: '5%',
    color: '#fff',
    textAlign: 'left',
  },
  detailsResultsText: {
    marginTop: 30,
    marginRight: '5%',
    fontSize: 26,
    bottom: '5%',
    color: '#000',
    textAlign: 'right',
  },
  detailsTitles: {
    marginLeft: '5%',
    textAlign: 'left'
  },
  detailsResults: {
    marginRight: '5%',
    textAlign: 'right',
  },
  sesionButton: {
    marginTop: '10%',
    width: '70%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  navMenu: {
    top: '10%',
    backgroundColor: '#FFF',
    width: '100%',
    height: '10%',
    borderTopEndRadius: 30,
    borderTopLeftRadius: 30,
  },
  navOptions: {
    width: '70%',
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    top: '3%',
  },
});