import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import COLORS from '../constants/colors';

import tasksImage from '../img/nav/tasks.png';
import homeImage from '../img/nav/home.png';
import studentsImage from '../img/nav/students.png';

const Navbar = () => {
  return (
    <View style={styles.navBar}>
      <View style={styles.navMenu}>
        <TouchableOpacity style={styles.navButton}>
          <Image source={tasksImage} style={styles.tasks} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Image source={homeImage} style={styles.home} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Image source={studentsImage} style={styles.students} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: COLORS.white,
    width: '100%',
    height: '9%',
    borderTopEndRadius: 20,
    borderTopLeftRadius: 20,
  },
  navMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
  },
  navButton: {
    padding: 10,
  },
  tasks: {
    // Estilos para la imagen de tareas
    width: 35,
    height: 35,
  },
  home: {
    // Estilos para la imagen de inicio
    width: 35,
    height: 35,
  },
  students: {
    // Estilos para la imagen de estudiantes
    width: 35,
    height: 35,
  },
});

export default Navbar;
