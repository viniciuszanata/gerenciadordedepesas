import React, {useEffect, useState} from 'react';
import {StyleProp, StyleSheet, Text, TextInput, ViewStyle} from 'react-native';

interface InputEmailProps {
  email: String;
  placeholder: String;
  style: StyleProp<ViewStyle>;
}

export const InputEmail = ({email, placeholder, style}: InputEmailProps) => {
  const [value, setValue] = useState('');
  useEffect(() => {
    return setValue(email);
  }, [email]);
  return (
    <>
      <Text>Email:</Text>
      <TextInput
        style={style ? style : styles.input}
        onChangeText={setValue}
        value={value}
        placeholder={placeholder}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
