import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import MenuPrincipal from './screens/Menu';
import SeleccionTema from './screens/Tema';
import SeleccionNivel from './screens/SeleccionNivel';
import SeleccionActividades from './screens/SeleccionActividades';
import Perfil from './screens/Perfil';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
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