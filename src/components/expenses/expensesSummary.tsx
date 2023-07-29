import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {ExpensePeriod} from '../../services/expenses/interfaceExpense';

const ExpensesSummary = ({expensesPeriod, expenses}: ExpensePeriod) => {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{expensesPeriod}</Text>
      <Text style={styles.sum}>R$ {expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    paddingHorizontal: 16,
    backgroundColor: '#e4d9fd',
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  period: {
    fontSize: 12,
    color: '#5721d4',
  },
  sum: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3e04c3',
  },
});
