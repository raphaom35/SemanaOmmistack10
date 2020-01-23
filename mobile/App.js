import React from 'react';
import { StyleSheet, Text, View,StatusBar,YellowBox } from 'react-native';
import Routes from './routes'
YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
])
export default function App() {
  return (
    <>
    <StatusBar barStyle='light-content' backgroundColor='#7D40E7'/>
    <Routes  />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
