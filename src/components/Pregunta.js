import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import COLORS from '../constants/colors';

const Pregunta = ({ pregunta, imagenEnunciado, opciones, respuestaCorrecta, onRespuestaSeleccionada }) => {
    const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);
  
    const handleRespuestaSeleccionada = (opcion) => {
      setRespuestaSeleccionada(opcion);
      onRespuestaSeleccionada(opcion === respuestaCorrecta);
    };
  
    return (
      <View style={styles.preguntaContainer}>
        <Text style={styles.preguntaText}>{pregunta}</Text>
        <Image
        source={imagenEnunciado}
        style={styles.imagenEnunciado}
        resizeMode="contain"
        />
        {/* Mostrar opciones en una cuadrícula 2x2 */}
        <View style={styles.botonera}>
          <View style={styles.row}>
            {opciones.slice(0, 2).map((opcion, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.opcionButton,
                  respuestaSeleccionada === opcion && styles.opcionSeleccionada,
                ]}
                onPress={() => handleRespuestaSeleccionada(opcion)}
              >
                <Text style={styles.opcionText}>{opcion}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.row}>
            {opciones.slice(2, 4).map((opcion, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.opcionButton,
                  respuestaSeleccionada === opcion && styles.opcionSeleccionada,
                ]}
                onPress={() => handleRespuestaSeleccionada(opcion)}
              >
                <Text style={styles.opcionText}>{opcion}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    preguntaContainer: {
      alignItems: 'center',
      width: '80%',
    },
    preguntaText: {
      fontSize: 20,
      fontWeight: 'bold',
      marginVertical: 10,
      color: COLORS.lilaShadow,
      textAlign: 'center',
    },
    opcionButton: {
      flex: 1,
      height: 80,
      backgroundColor: COLORS.lila,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 5,
      borderRadius: 10,
    },
    opcionText: {
      color: COLORS.white,
      fontSize: 20,
      fontWeight: 'bold',
    },
    opcionSeleccionada: {
      backgroundColor: COLORS.lilaShadow,
    },
    botonera: {
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    imagenEnunciado: {
      width: '100%',
      height: 200,
      backgroundColor: COLORS.white,
      borderRadius: 10,
      margin: 5,
    },
  });
  
  export default Pregunta;
