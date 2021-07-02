import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'

import Card from '../components/Card'
import Input from '../components/Input'
import NumberContainer from '../components/NumberCotainer'

// Resources
import { colors } from '../resources/color';

const StartGameScreen = () => {
  const [enteredValue, setEnteredValue] = useState('')
  const [confirmed, setConfirmed] = useState(false)
  const [selectedNumber, setSelectedNumber] = useState('')

  const handlerInputNumber = text => {
    setEnteredValue(text.replace(/[^0-9]/g), '')
  }

  const handlerResetInput = () => {
    setEnteredValue('')
    setConfirmed(false)
  }

  const handlerConfirmInput = () => {
    const choseNumber = parseInt(enteredValue)
    if (choseNumber === NaN || choseNumber <= 0 || choseNumber > 99) return
    setConfirmed(true)
    setSelectedNumber(parseInt(enteredValue))
    setEnteredValue('')
  }
  let confirmedOutput
  if (confirmed) {
    confirmedOutput = (
      <Card>
        <Text>Select</Text>
        <NumberContainer>{selectedNumber} </NumberContainer>
        <Button title='Begin Game' onPress={() => props.onStartGame(selectedNumber)} />
      </Card>
    )
  }

  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }} >
      <View style={styles.screen}>
        <Text style={styles.title} >Start Game</Text>
        <Card style={styles.inputContainer} >
          <Text>Select one number</Text>
          <Input style={styles.input}
            blurOnSubmit
            autoCapitalization='none'
            autoCorrect={false}
            keyboardType='numeric'
            maxLenght={2}
            onChangeText={handlerInputNumber}
            value={enteredValue}
          />
          <View style={styles.buttonContainer} >
            <Button title="clear" onPress={handlerResetInput} />
            <Button title="submit" onPress={handlerConfirmInput} />
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
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
    marginVertical: 10,
    fontFamily: 'open-sans-bold'
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
