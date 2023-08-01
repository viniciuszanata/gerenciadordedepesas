import * as React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import AllExpensesScreen from './AllExpensesScreen';
import RecentExpensesScreen from './RecentExpensesScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ButtonAdd} from '../../components/input/buttonAdd';
import {useNavigation} from '@react-navigation/native';

const BottomTabs = createBottomTabNavigator();

export const DashboardScreen = () => {
  const navigation = useNavigation();

  const handlerAddButton = () => {
    try {
      navigation.navigate('ManageExpenseScreen' as never);
    } catch (err) {
      console.log(err);
    }
  };

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
        <ButtonAdd onPress={handlerAddButton} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    tintColor: 'white',
  },
  addButtonContainer: {
    position: 'absolute',
    bottom: '7%',
    right: '2%',
  },
});
