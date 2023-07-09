import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {InputField} from '../../components';
import {ButtonInput} from '../../components/input/button';
import {AccountStore} from '../../store/account/accountStore';
import {useNavigation} from '@react-navigation/native';
interface AuthContentProps {
  onSuccessLogin: () => void;
}

export const AuthContent = ({onSuccessLogin}: AuthContentProps) => {
  const {setUser} = AccountStore();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const setUserEmail = (item: string) => {
    setEmail(item);
  };

  const handlerButton = () => {
    try {
      if (password === 'banana' && email === 'email@email.com') {
        setPasswordError(false);
        setUser(email);
        onSuccessLogin();
      } else {
        setPasswordError(true);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const navigation = useNavigation();
  const handlerSignUpButton = () => {
    try {
      navigation.navigate('SignUpScreen' as never);
    } catch (err) {
      console.log(err);
    }
  };

  return (
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
      <ButtonInput
        title={'Login'}
        onPress={handlerButton}
        style={styles.button}
        titleStyle={styles.buttonText}
      />
      <ButtonInput
        title={'SignUp'}
        onPress={handlerSignUpButton}
        style={styles.signUpButton}
        titleStyle={styles.signUpButtonText}
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
    width: '80%',
    margin: 12,
    padding: 10,
  },
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
  signUpButton: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    margin: 5,
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 0.5,
  },
  signUpButtonText: {
    color: '#993399',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
  },
});
