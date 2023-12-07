import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Loginfacial from '../../screens/LoginFacial';
import Login from '../../screens/Login';
import Registro from '../../screens/Registro';
import VerificacionRegistro from '../../screens/VerificacionRegistro';
import MenuPrincipal from '../../screens/Menu';
import Perfil from '../../screens/Perfil';
import SeleccionTema from '../../screens/Tema';
import SeleccionNivel from '../../screens/SeleccionNivel';
import SeleccionActividades from '../../screens/SeleccionActividades';
import Ejercicio from '../../screens/Actividad';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Loginfacial" component={Loginfacial} />
                {/* <Stack.Screen name="Registro" component={Registro} /> */}
                <Stack.Screen name="VerificacionRegistro" component={VerificacionRegistro} />
                <Stack.Screen name="MenuPrincipal" component={MenuPrincipal} />
                <Stack.Screen name="Perfil" component={Perfil} />
                <Stack.Screen name="SeleccionTema" component={SeleccionTema} />
                <Stack.Screen name="SeleccionNivel" component={SeleccionNivel} />
                <Stack.Screen name="SeleccionActividades" component={SeleccionActividades} />
                <Stack.Screen name="Ejercicio" component={Ejercicio} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;