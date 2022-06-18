import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navigation from './src/navigator/Navigation';
import {AuthProvider} from './src/context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <StatusBar backgroundColor='#fff'/>
      <Navigation />
    </AuthProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
