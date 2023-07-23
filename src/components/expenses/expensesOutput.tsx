import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {Expense} from '../../services/expenses/interfaceExpense';
import ExpensesList from './expensesList';
import ExpensesSummary from './expensesSummary';

interface ExpensesOutputProps {
  expensesPeriod: string;
  expenses: Expense[];
}

const ExpensesOutput = ({expenses, expensesPeriod}: ExpensesOutputProps) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList expenses={expenses} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    padding: '10%',
  },
});
