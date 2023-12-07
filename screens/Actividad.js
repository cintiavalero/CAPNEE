import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import Fondo from '../src/components/Fondo';
import Navbar from '../src/components/Navbar';
import COLORS from '../src/constants/colors';
import Pregunta from '../src/components/Pregunta';
import { useNavigation } from '@react-navigation/native';

//Imagenes enunciados
import Enunciado1 from '../src/img/enunciados/enunciado.jpg';
import Enunciado2 from '../src/img/enunciados/enunciado2.jpg';
import Enunciado3 from '../src/img/enunciados/enunciado3.png';

const Ejercicio = () => {
  const navigation = useNavigation();

  //Estado de la pregunta actual y respuesta correcta
  const [indicePreguntaActual, setIndicePreguntaActual] = useState(0);
  const [respuestaCorrecta, setRespuestaCorrecta] = useState(false);

  //Lista de preguntas (hardcodeadas)
  const preguntas = [
    {
      pregunta: '¿Cuántas manzanas hay en la imágen?',
      imagenEnunciado: Enunciado1,
      opciones: [4, 6, 7, 8],
      respuestaCorrecta: 6,
    },
    {
      pregunta: '¿Cuántas pelotas verdes hay en la imágen?',
      imagenEnunciado: Enunciado2,
      opciones: [5, 3, 6, 10],
      respuestaCorrecta: 5,
    },
    {
      pregunta: '¿Qué imagen representa al número 2?',
      imagenEnunciado: Enunciado3,
      opciones: ['Imagen 1', 'Imagen 2', 'Imagen 3', 'Imagen 4'],
      respuestaCorrecta: 'Imagen 1',
    },
  ];

  // Función para manejar la respuesta seleccionada
  const handleRespuestaSeleccionada = (esCorrecta) => {
    setRespuestaCorrecta(esCorrecta);

    // Si la respuesta es correcta, mostrar pantalla verde durante 2 segundos y luego avanzar a la siguiente pregunta
    if (esCorrecta) {
      console.log('Pregunta correcta');
      setTimeout(() => {
        setRespuestaCorrecta(false); // Reiniciar el estado de respuesta correcta

        // Verificar si estás en la última pregunta antes de avanzar
        if (indicePreguntaActual < preguntas.length - 1) {
          setIndicePreguntaActual((prev) => prev + 1);
        } else {
          // Se llegó a la última pregunta (Agregar código para volver a la selección de actividades)
          console.log('Se llegó al final de la activdad');
          navigation.navigate('SeleccionActividades');
        }
      }, 1200); // 1200 milisegundos (1.2 segundos)
    } else {
      console.log('Pregunta incorrecta');
    }
  };

  return (
    <Fondo backgroundColor={COLORS.cielo}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Título */}
        <Text style={styles.title}>Ejercicio {indicePreguntaActual + 1}</Text>

        {/* Mostrar pregunta actual */}
        {indicePreguntaActual < preguntas.length && (
          <>
            <Pregunta
              pregunta={preguntas[indicePreguntaActual].pregunta}
              imagenEnunciado={preguntas[indicePreguntaActual].imagenEnunciado}
              opciones={preguntas[indicePreguntaActual].opciones}
              respuestaCorrecta={preguntas[indicePreguntaActual].respuestaCorrecta}
              onRespuestaSeleccionada={handleRespuestaSeleccionada}
            />

            {/* Mostrar mensaje de éxito si la respuesta es correcta */}
            {respuestaCorrecta && (
              <View style={styles.respuestaCorrectaContainer}>
                <Image
                  source={require('../src/img/logoMenuPrincipal.png')} 
                  style={styles.checkmarkIcon}
                />
                <Text style={styles.respuestaCorrectaText}>¡Respuesta Correcta!</Text>
              </View>
            )}
          </>
        )}

      </ScrollView>
      <Navbar/>
    </Fondo>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    margin: 10,
    color: COLORS.lilaShadow,
  },
  respuestaCorrectaContainer: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(50, 205, 50, 0.9)',
  },
  checkmarkIcon: {
    width: 130,
    height: 130,
    marginBottom: 10,
  },
  respuestaCorrectaText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: COLORS.white,
  },
});

export default Ejercicio;