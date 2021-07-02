import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import NumberContainer from '../components/NumberCotainer';
import Card from '../components/Card';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  min = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min) + min);
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = props => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userOption),
  );

  render(
    <View style={styles.screen}>
      <Text>Oponent</Text>
      <NumberContainer>{currentGuess} </NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="MENOR" onPress={() => {}} />
        <Button title="MAYOR" onPress={() => {}} />
      </Card>
    </View>,
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
    marginTop: 20,
    width: 300,
    maxWidth: '80%',
  },
});

export default GameScreen;
