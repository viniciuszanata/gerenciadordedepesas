import {inject, observer} from 'mobx-react';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import ExpensesOutput from '../../components/expenses/expensesOutput';
import {ExpensesScreenProps} from '../../services/expenses/interfaceExpense';
import {getLastWeek} from '../../utils';

const RecentExpensesScreen = inject('expensesStore')(
  observer(({expensesStore}: ExpensesScreenProps) => {
    const {expenses} = expensesStore!;

    const today = new Date();
    const date7DaysAgo = getLastWeek(today, 7);

    const recentExpenses = expenses.filter(expense => {
      const expenseDate = new Date(expense.date);
      return expenseDate >= date7DaysAgo && expenseDate <= today;
    });

    return (
      <View style={styles.container}>
        <ExpensesOutput
          expenses={recentExpenses}
          expensesPeriod={'Ultima semana'}
          fallbackText={'No registered itens found!'}
        />
      </View>
    );
  }),
);

export default RecentExpensesScreen;

const styles = StyleSheet.create({
  container: {},
});
