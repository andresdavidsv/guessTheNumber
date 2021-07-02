import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
// Resources
import {colors} from '../resources/color';

const Input = ({style = {}, ...props}) => {
  return <TextInput style={{...styles.input, ...style}} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderBottomColor: colors.blackPearl,
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Input;
