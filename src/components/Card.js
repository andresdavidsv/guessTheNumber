import React from 'react';
import {View, StyleSheet} from 'react-native';
// Resources
import {colors} from '../resources/color';

const Card = props => (
  <View style={{...styles.card, ...props.style}}>{props.children}</View>
);

const styles = StyleSheet.create({
  card: {
    shadowColor: colors.blackPearl,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: colors.white,
  },
});

export default Card;
