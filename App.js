/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

//Components
import Header from './src/components/Header'
import StartGameScreen from './src/views/StartGameScreen';

const App = () => {

  return (
    <View style={styles.container}>
      <Header title={'Adivina el numero'} />
      <StartGameScreen/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
