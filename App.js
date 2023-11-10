import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Ejercicio from './screens/Actividad';
import Login from './screens/Login';
import LoginFacial from './screens/LoginFacial';
import MenuPrincipal from './screens/Menu';
import Perfil from './screens/Perfil';
import SeleccionActividades from './screens/SeleccionActividades';
import SeleccionNivel from './screens/SeleccionNivel';
import SeleccionTema from './screens/Tema';
import VerificacionRegistro from './screens/VerificacionRegistro';



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LoginFacial/>
      {/* --Menu Principal-- */}
      {/* <MenuPrincipal/> */}

      {/* --Selección de Tema-- */}
      {/* <SeleccionTema/> */}

      {/* --Perfil-- */}
      {/* <Perfil/> */}

      {/* --Selección de Nivel-- */}
      {/* <SeleccionNivel/> */}

      {/* --Selección de Actividades-- */}
      {/* <SeleccionActividades/> */}


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
