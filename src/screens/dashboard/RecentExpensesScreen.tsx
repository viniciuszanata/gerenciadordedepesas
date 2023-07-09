import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ExpensesOutput from '../../components/expenses/expensesOutput';
import {MOCK_EXPENSES} from '../../store/expense/mockExpenses';

const RecentExpensesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>RecentExpensesScreen</Text>
      <ExpensesOutput
        expenses={MOCK_EXPENSES}
        expensesPeriod={'Ultima semana'}
      />
    </View>
  );
};

export default RecentExpensesScreen;

const styles = StyleSheet.create({
  container: {},
});
