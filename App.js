/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

//Components
import Header from './src/components/Header';
import StartGameScreen from './src/views/StartGameScreen';
import GameScreen from './src/views/GameScreen';

const App = () => {
  const [userNumber, setUserNumber] = useState();

  const handlerStartGame = selectedNumber => {
    setUserNumber(selectedNumber);
  };

  const content = userNumber ? (
    <GameScreen onEndGame={handlerStartGame} userOption={userNumber} />
  ) : (
    <StartGameScreen onStartGame={handlerStartGame} />
  );

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
