import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import AppNavigator from './src/components/AppNavigator';
// import Ejercicio from './screens/Actividad';
import Login from './screens/Login';

// import LoginFacial from './screens/LoginFacial';
// import MenuPrincipal from './screens/Menu';
// import Perfil from './screens/Perfil';
// import SeleccionActividades from './screens/SeleccionActividades';
// import SeleccionNivel from './screens/SeleccionNivel';
// import SeleccionTema from './screens/Tema';
// import VerificacionRegistro from './screens/VerificacionRegistro';

export default function App() {
  return (

      // {/* // <LoginFacial/>
      // // {/* --Menu Principal-- */}
      // {/* <MenuPrincipal/> */}

      // {/* --Selección de Tema-- */}
      // {/* <SeleccionTema/> */}

      // {/* --Perfil-- */}
      // {/* <Perfil/> */}
      // {/* <Login/> */}
      // {/* --Selección de Nivel-- */}
      // {/* <SeleccionNivel/> */}

      // {/* --Selección de Actividades-- */}
      //  {/* <SeleccionActividades/> */}
        <AppNavigator/>
      //   {/* <StatusBar style="auto"/> */}

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
