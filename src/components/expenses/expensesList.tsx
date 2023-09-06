import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Expense} from '../../services/expenses/interfaceExpense';
import ExpenseItem from './expensesItem';

interface ExpensesListProps {
  expenses: Expense[];
}

const ExpensesList = ({expenses}: ExpensesListProps) => {
  const renderExpenseItem = ({item}: {item: Expense}) => (
    <ExpenseItem {...item} />
  );

  return (
    <FlatList
      style={styles.flatList}
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={item => item.id}
    />
  );
};

export default ExpensesList;

const styles = StyleSheet.create({
  flatList: {
    marginBottom: 90,
  },
});
