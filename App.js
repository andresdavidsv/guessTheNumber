/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

//Components
import Header from './src/components/Header'
import StartGameScreen from './src/views/StartGameScreen';
import GameScreen from './src/views/GameScreen';

const App = () => {
  const [userNumber, setUserNumber] = useState()

  const handlerStartGame = selectedNumber => {
    setUserNumber(selectedNumber)
  }

  let content = <StartGameScreen onStartGame={handlerStartGame} />

  if (userNumber) {
    content = <GameScreen />
  }

  return (
    <View style={styles.container}>
      <Header title={'Adivina el numero'} />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
