import React, {useEffect, useState} from 'react';
import {StyleProp, StyleSheet, Text, TextInput, ViewStyle} from 'react-native';

interface InputEmailProps {
  email: string;
  placeholder: string;
  style: StyleProp<ViewStyle>;
}
interface InputPasswordProps {
  password: string;
  placeholder: string;
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

export const InputPassword = ({
  password,
  placeholder,
  style,
}: InputPasswordProps) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    return setValue(password);
  }, [password]);

  return (
    <>
      <Text>Password:</Text>
      <TextInput
        style={style ? style : styles.input}
        onChangeText={setValue}
        value={value}
        placeholder={placeholder}
        secureTextEntry={true}
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
