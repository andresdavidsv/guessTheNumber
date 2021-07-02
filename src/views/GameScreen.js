import React, { useState, useEffect, useRef } from 'react';
import { View, Button, Text, Dimensions, StyleSheet, Alert } from 'react-native';
import NumberContainer from '../components/NumberCotainer';
import Card from '../components/Card';
import { colors } from '../resources/color';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const random = Math.floor(Math.random() * (max - min) + min);

  if (random === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return random;
  }
};

const GameScreen = ({ onEndGame, onGameOver, userOption }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userOption),
  );
  const [rounds, setRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const handleEndGame = () => {
    onEndGame(0);
  };

  useEffect(() => {
    if (currentGuess === userOption) onGameOver(rounds);
  }, [currentGuess, userOption, onGameOver, rounds]);

  const handleNextGuess = direction => () => {
    if (
      (direction === 'lower' && currentGuess < userOption) ||
      (direction === 'greater' && currentGuess > userOption)
    ) {
      Alert.alert('No mientas!', 'Tu sabes que no es verdad...!', [
        {
          text: 'Disculpa!',
          style: 'cancel',
        },
      ]);
    }

    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess,
    );
    setCurrentGuess(nextNumber);
    setRounds(round => round + 1);
  };

  return (
    <View style={styles.screen}>
      <Text>La suposición del oponente</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="MENOR" onPress={handleNextGuess('lower')} />
        <Button title="MAYOR" onPress={handleNextGuess('greater')} />
      </Card>
      <Button title="TERMINAR" onPress={handleEndGame} color={colors.blackPearl} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: Dimensions.get('window').height > 600 ? 20 : 10,
    padding: 10,
    width: 300,
    maxWidth: '80%',
    marginBottom: 10,
  },
});

export default GameScreen;
