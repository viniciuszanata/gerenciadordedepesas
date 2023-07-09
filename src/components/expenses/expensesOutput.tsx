import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import ExpensesList from './expensesList';
import ExpensesSummary from './expensesSummary';

interface ExpensesOutputProps {
  expensesPeriod: String;
  expenses: {
    id: string;
    description: string;
    amount: number;
    date: Date;
  }[];
}

const ExpensesOutput = ({expenses, expensesPeriod}: ExpensesOutputProps) => {
  return (
    <View>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList expenses={expenses} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {},
});
