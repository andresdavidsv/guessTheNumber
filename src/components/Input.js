import React from 'react'
import { TextInput, StyleSheet, ProgressViewIOSComponent } from 'react-native'
// Resources
import { colors } from '../resources/color';

const Input = props => (
  <TextInput style={{ ...styles.input, ...props.style }} />
)

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: colors.blackPearl,
    borderBottomWidth: 1,
    marginVertical: 10
  }
})

export default Input