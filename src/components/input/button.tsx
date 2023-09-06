import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ButtonInputProps} from '../../services/buttons/interfaceButton';

export const ButtonInput = ({
  title,
  onPress,
  style,
  titleStyle,
}: ButtonInputProps) => {
  return (
    <TouchableOpacity style={style || styles.button} onPress={onPress}>
      <Text style={(styles.buttonText, titleStyle)}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#993399',
    padding: 10,
    margin: 5,
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 0.5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
  },
});
