import React from 'react';
import {SafeAreaView} from 'react-native';
import SignInScreen from './src/screens/account/SigInScreen';

const App = () => {
  return (
    <SafeAreaView>
      <SignInScreen title={'Login'} />
    </SafeAreaView>
  );
};

export default App;
