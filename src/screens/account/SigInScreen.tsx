import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {InputEmail, InputPassword} from '../../components';

interface SignInScreenProps {
  title: String;
}
//função de execução criar com const
const SignInScreen = ({title}: SignInScreenProps) => {
  return (
    <View style={styles.container}>
      <Text> {title} </Text>
      <InputEmail email="" placeholder="E-mail" style={styles.input} />
      <InputPassword password="" placeholder="Senha" style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default SignInScreen;
