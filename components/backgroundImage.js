import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

export default function BackgroundImage({ children }) {
  return (
    <ImageBackground source={require('../img/background.png')} style={styles.backgroundImage}>
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
});
