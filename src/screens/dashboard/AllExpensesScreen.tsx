import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface AllExpenseScreenProps {}

const AllExpensesScreen = (props: AllExpenseScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>AllExpenses</Text>
    </View>
  );
};

export default AllExpensesScreen;

const styles = StyleSheet.create({
  container: {},
});
