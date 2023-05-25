import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {InputEmail} from '../../components';

interface SignInScreenProps {
  title: String;
}
//função de execução criar com const
const SignInScreen = ({title}: SignInScreenProps) => {
  // const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.container}>
      <Text> {title} </Text>
      <InputEmail />
      <Text>Senha:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="senha"
        secureTextEntry={true}
      />
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
