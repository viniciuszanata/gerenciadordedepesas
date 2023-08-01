import React from 'react';
import {SignInScreen} from './src/screens/account/SignInScreen';
import {DashboardScreen} from './src/screens/dashboard/DashboardScreen';
import ManageExpenseScreen from './src/screens/dashboard/ManageExpenseScreen';
import {SignUpScreen} from './src/screens/account/SignUpScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#993399'},
          headerTintColor: 'white',
        }}>
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DashboardScreen"
          component={DashboardScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ManageExpenseScreen"
          component={ManageExpenseScreen}
          options={{
            presentation: 'modal',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
