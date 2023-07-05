import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {InputField} from '../../components';
import {ButtonInput} from '../../components/input/button';
import {AccountStore} from '../../store/account/accountStore';

//função de execução criar com const
export const SignInScreen = () => {
  const navigation = useNavigation();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {setUser, getUser, deleteUser} = AccountStore();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  useEffect(() => {
    // deleteUser().then(r => r);
    getUser().then(
      result => result && navigation.navigate('DashboardScreen' as never),
    );
  }, [getUser, navigation]);

  const setUserEmail = (item: string) => {
    setEmail(item);
  };

  const handlerButton = () => {
    try {
      if (password === 'banana' && email === 'email@email.com') {
        setPasswordError(false);
        setUser(email);
        navigation.navigate('DashboardScreen' as never);
      } else {
        setPasswordError(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text> Login </Text>
        <Text>Bem vindo</Text>
        <InputField
          value={email}
          placeholder="E-mail"
          style={styles.input}
          keyboard={'email-address'}
          onChange={setUserEmail}
          onSelection={(text: string) => text}
        />
        <InputField
          value={password}
          placeholder="Password"
          style={styles.input}
          keyboard={'ascii-capable'}
          onChange={(text: string) => setPassword(text)}
          onSelection={(text: string) => text}
          isPassword={true}
          error={passwordError ? 'Your Password is incorrect' : undefined}
        />
        <ButtonInput title={'Login'} onPress={handlerButton} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  input: {
    height: 40,
    width: '80%',
    margin: 12,
    padding: 10,
    // backgroundColor: 'aqua',
  },
});

//Botão de LogOut
//Layouts da dashboard
//Autenticação
//Cadastro do email
//Fazer validação email + password
//Navegações
