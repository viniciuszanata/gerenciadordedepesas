import * as React from 'react';
import {StyleSheet, FlatList, Text} from 'react-native';

interface Expense {
  id: string;
  description: string;
}

interface ExpensesListProps {
  expenses: Expense[];
}

const ExpensesList = ({expenses}: ExpensesListProps) => {
  const renderExpenseItem = ({item}: {item: Expense}) => (
    <Text>{item.description}</Text>
  );

  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={item => item.id}
    />
  );
};

export default ExpensesList;

const styles = StyleSheet.create({
  container: {},
});
