import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';
import {AccountStore} from '../../store/account/accountStore';
import {AuthContent} from '../../components/auth/authContent';

export const SignInScreen = () => {
  const navigation = useNavigation();
  const {getUser} = AccountStore();

  const onSuccessLogin = () => {
    getUser().then(result => {
      if (result) {
        navigation.navigate('DashboardScreen' as never);
      }
    });
  };

  return (
    <SafeAreaView>
      <AuthContent onSuccessLogin={onSuccessLogin} />
    </SafeAreaView>
  );
};
