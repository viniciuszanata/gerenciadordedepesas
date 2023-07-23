import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import ExpensesOutput from '../../components/expenses/expensesOutput';
import {MOCK_EXPENSES} from '../../services/models/expenseModel';

const AllExpensesScreen = () => {
  return (
    <View style={styles.container}>
      <ExpensesOutput expenses={MOCK_EXPENSES} expensesPeriod={'Total'} />
    </View>
  );
};

export default AllExpensesScreen;

const styles = StyleSheet.create({
  container: {},
});
