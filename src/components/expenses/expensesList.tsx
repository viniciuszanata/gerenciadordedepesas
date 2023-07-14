import * as React from 'react';
import {FlatList, Text} from 'react-native';

interface Expense {
  id: string;
  description: string;
}

interface ExpensesListProps {
  expenses: Expense[];
}

const ExpensesList = ({expenses}: ExpensesListProps) => {
  const renderExpenseItem = ({item}: any) => <Text>{item.description}</Text>;

  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={item => item.id}
    />
  );
};

export default ExpensesList;
