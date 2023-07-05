import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

export const ButtonInput = ({title, onPress, style}: ButtonProps) => {
  return (
    <TouchableOpacity style={style || styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
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
  },
});
