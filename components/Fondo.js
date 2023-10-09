import React from 'react';
import { ImageBackground, StyleSheet, View, Dimensions, KeyboardAvoidingView } from 'react-native';

const Fondo = ({ children, backgroundColor }) => {
  return (
    <KeyboardAvoidingView
      style={[styles.background, { backgroundColor }]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ImageBackground
        source={require('../assets/fondo.jpg')}
        style={styles.imageBackground}
        imageStyle={{ opacity: 0.1 }}
      >
        {children}
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
    width: '100%',
    
  },
  imageBackground: {
    resizeMode: 'none',
    width: '100%', 
  },
});

export default Fondo;
