import React from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ButtonProps} from '../../services/buttons/interfaceButton';

export const ButtonAdd = ({onPress, style}: ButtonProps) => {
  const text = Platform.OS === 'android' ? '+' : 'x';
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.plus}> {text} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#bf00ff',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 0.5,
    width: 60,
    height: 60,
  },
  plus: {
    color: '#FFF',
    fontSize: 40,
    marginTop: Platform.OS === 'android' ? -7 : -4,
  },
});
