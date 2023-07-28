import * as React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import AllExpensesScreen from './AllExpensesScreen';
import RecentExpensesScreen from './RecentExpensesScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ButtonAdd} from '../../components/input/buttonAdd';

const BottomTabs = createBottomTabNavigator();
// const handlerButton = () => {
//   try {
//   } catch (err) {
//     console.log(err);
//   }
// };

export const DashboardScreen = () => {
  return (
    <>
      <BottomTabs.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#993399'},
          headerTintColor: 'white',
          tabBarStyle: {backgroundColor: '#993399'},
          tabBarActiveTintColor: 'white',
        }}>
        <BottomTabs.Screen
          name="RecentExpensesScreen"
          component={RecentExpensesScreen}
          options={{
            title: 'Recent Expenses',
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: () => (
              <Image
                style={styles.image}
                source={require('../../assets/icon/hourglass.png')}
                resizeMode={'contain'}
              />
            ),
          }}
        />
        <BottomTabs.Screen
          name="AllExpensesScreen"
          component={AllExpensesScreen}
          options={{
            title: 'All Expenses',
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: () => (
              <Image
                style={styles.image}
                source={require('../../assets/icon/calendar.png')}
                resizeMode={'contain'}
              />
            ),
          }}
        />
      </BottomTabs.Navigator>
      <View style={styles.addButtonContainer}>
        <ButtonAdd onPress={() => {}} style={styles.button} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    tintColor: 'white',
  },
  button: {
    backgroundColor: '#993399',
    padding: 10,
    margin: 5,
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 0.5,
  },
  addButtonContainer: {
    position: 'absolute',
    bottom: '7%',
    right: '2%',
  },
});
