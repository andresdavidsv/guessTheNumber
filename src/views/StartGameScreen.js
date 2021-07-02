import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

import Card from '../components/Card'

// Resources
import {colors} from '../resources/color';

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title} >Start Game</Text>
      <Card style={styles.inputContainer} >
        <Text>Select one number</Text>
        <TextInput />
        <View style={styles.buttonContainer} >
          <Button title="clear" onPress={() => { }} />
          <Button title="submit" onPress={() => { }} />
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    padding: 20,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  }
})

export default StartGameScreen
