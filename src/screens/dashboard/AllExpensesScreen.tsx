import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ExpensesOutput from '../../components/expenses/expensesOutput';
import {MOCK_EXPENSES} from '../../store/expense/mockExpenses';

const AllExpensesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>AllExpenses</Text>
      <ExpensesOutput expenses={MOCK_EXPENSES} expensesPeriod={'Total'} />
    </View>
  );
};

export default AllExpensesScreen;

const styles = StyleSheet.create({
  container: {},
});
