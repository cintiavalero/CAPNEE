import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import BackgroundImage from './components/backgroundImage';
import Profile from './components/perfil';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <BackgroundImage>
        <Profile />
      </BackgroundImage>
      <StatusBar style="auto" />
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