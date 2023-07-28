import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {ExpensePeriod} from '../../services/expenses/interfaceExpense';
import ExpensesList from './expensesList';
import ExpensesSummary from './expensesSummary';

const ExpensesOutput = ({expenses, expensesPeriod}: ExpensePeriod) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} expensesPeriod={expensesPeriod} />
      <ExpensesList expenses={expenses} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '10%',
    paddingTop: '10%',
    paddingBottom: 0,
  },
});
