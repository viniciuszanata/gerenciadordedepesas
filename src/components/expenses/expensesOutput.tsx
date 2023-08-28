import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {ExpensePeriod} from '../../services/expenses/interfaceExpense';
import ExpensesList from './expensesList';
import ExpensesSummary from './expensesSummary';

const ExpensesOutput = ({
  expenses,
  expensesPeriod,
  fallbackText,
}: ExpensePeriod) => {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} expensesPeriod={expensesPeriod} />
      {content}
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 0,
  },
  infoText: {
    color: '#993399',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 32,
  },
});
