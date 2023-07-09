import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface RecentExpensesScreenProps {}

const RecentExpensesScreen = (props: RecentExpensesScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>RecentExpensesScreen</Text>
    </View>
  );
};

export default RecentExpensesScreen;

const styles = StyleSheet.create({
  container: {},
});
