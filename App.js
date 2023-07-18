import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import Screens from './src/Screens';
import Authentication from './src/Authentication';
import { auth } from './src/FirebaseConfig';
export default function App() {
  const [user, setUser] = useState('');

  useEffect(() => {

    const unsubscribeFromAuthStatusChanged = auth.onAuthStateChanged((user) => {
      user ? setUser(user) : setUser(false);
    });
    return unsubscribeFromAuthStatusChanged;
  }, []);


  return (
    user ? <Screens /> : <Authentication />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
