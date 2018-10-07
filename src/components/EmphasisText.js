import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import {SP_ORANGE} from '../styles/colors';

const styles = StyleSheet.create({
  emphasis: {
    fontWeight: 'bold',
    fontSize: 18,
    color: SP_ORANGE,
  }
})
const EmphasisText = (props) => {
  const newStyle = StyleSheet.flatten([styles.emphasis, props.style])
  
  return (
  <Text style={newStyle}>{props.children}</Text>
  )
};

export default EmphasisText;
