import React from 'react';
import {View, StyleSheet} from 'react-native';
import ExpensesOutput from '../../components/expenses/expensesOutput';
import {observer} from 'mobx-react';
import {ExpensesStore} from '../../store/expense/expenseStore';

const AllExpensesScreen = observer(() => {
  const expensesStoreInstance = ExpensesStore();
  const {expenses} = ExpensesStore();
  const filteredExpenses = expensesStoreInstance.getFilteredExpenses('all');

  console.log(expenses);

  return (
    <View style={styles.container}>
      <ExpensesOutput
        expenses={filteredExpenses}
        expensesPeriod={'Todos as despesas'}
        fallbackText={'No registered itens found!'}
      />
    </View>
  );
});

export default AllExpensesScreen;

const styles = StyleSheet.create({
  container: {},
});
