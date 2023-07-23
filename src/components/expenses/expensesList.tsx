import * as React from 'react';
import {FlatList} from 'react-native';
import ExpenseItem from './expensesItem';

interface Expense {
  id: string;
  description: string;
  amount: number;
  date: Date;
}

interface ExpensesListProps {
  expenses: Expense[];
}

const ExpensesList = ({expenses}: ExpensesListProps) => {
  const renderExpenseItem = ({item}: {item: Expense}) => (
    <ExpenseItem
      id={item.id}
      description={item.description}
      amount={item.amount}
      date={item.date}
    />
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
