import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface ExpensesSummaryProps {
  periodName: String;
  expenses: {
    amount: number;
  }[];
}

const ExpensesSummary = ({periodName, expenses}: ExpensesSummaryProps) => {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View style={styles.container}>
      <Text>{periodName}</Text>
      <Text>R$ {expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {},
});
