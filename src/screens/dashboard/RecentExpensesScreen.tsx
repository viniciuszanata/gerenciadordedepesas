import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import ExpensesOutput from '../../components/expenses/expensesOutput';
import {MOCK_EXPENSES} from '../../services/models/expenseModel';

const RecentExpensesScreen = () => {
  return (
    <View style={styles.container}>
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
