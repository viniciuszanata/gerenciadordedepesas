import * as React from 'react';
import {FlatList} from 'react-native';
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
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={item => item.id}
    />
  );
};

export default ExpensesList;
