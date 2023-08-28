import React from 'react';
import {View, StyleSheet} from 'react-native';
import ExpensesOutput from '../../components/expenses/expensesOutput';
import {RecentExpensesScreenProps} from '../../services/expenses/interfaceExpense';
import {inject, observer} from 'mobx-react';

const AllExpensesScreen = inject('expensesStore')(
  observer(({expensesStore}: RecentExpensesScreenProps) => {
    const {expenses} = expensesStore!;

    return (
      <View style={styles.container}>
        <ExpensesOutput
          expenses={expenses}
          expensesPeriod={'Todos as despesas'}
          fallbackText={'No registered itens found!'}
        />
      </View>
    );
  }),
);

export default AllExpensesScreen;

const styles = StyleSheet.create({
  container: {},
});
