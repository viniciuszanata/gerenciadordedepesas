import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {ButtonProps} from '../../services/buttons/interfaceButton';

export const ButtonDelete = ({onPress}: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image
        source={require('../../assets/icon/trash.png')}
        resizeMode={'contain'}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
  },
});
