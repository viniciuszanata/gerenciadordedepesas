import {observer} from 'mobx-react';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import ExpensesOutput from '../../components/expenses/expensesOutput';
import {ExpensesStore} from '../../store/expense/expenseStore';

const RecentExpensesScreen = observer(() => {
  const expensesStoreInstance = ExpensesStore();
  const filteredExpenses = expensesStoreInstance.getFilteredExpenses('recent');

  return (
    <View style={styles.container}>
      <ExpensesOutput
        expenses={filteredExpenses}
        expensesPeriod={'Ultima semana'}
        fallbackText={'No registered itens found!'}
      />
    </View>
  );
});

export default RecentExpensesScreen;

const styles = StyleSheet.create({
  container: {},
});
