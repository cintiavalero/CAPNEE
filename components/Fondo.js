import React from 'react';
import { ImageBackground, StyleSheet, View, Dimensions } from 'react-native';

const Fondo = ({ children, backgroundColor }) => {
  return (
    <View style={[styles.background, { backgroundColor }]}>
      <ImageBackground
        source={require('../assets/fondo.jpg')}
        style={styles.imageBackground}
        imageStyle={{ opacity: 0.1 }}
      >
        {children}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    width: '100%',
    height: '100%',
  },
  imageBackground: {
    resizeMode: 'none',
    width: '100%',
    height: '100%',
  },
});

export default Fondo;
