import {observer} from 'mobx-react';
import React from 'react';
import {useLayoutEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {ButtonInput} from '../../components/input/button';
import {ButtonDelete} from '../../components/input/buttonDelete';
import {ExpensesStore} from '../../store/expense/expenseStore';

//criar usestate para receber informação e useEfect ou useLayout pra add oq vem do store
const ManageExpenseScreen = observer(({route, navigation}) => {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const expensesStoreInstance = ExpensesStore();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);
  /** @description
   * O array de dependências [navigation, isEditing] indica que o efeito deve ser executado sempre que uma das dependências (ou ambas) sofrer uma alteração.
   * Ou seja, sempre que o objeto navigation ou o valor de isEditing mudar, o useLayoutEffect será executado.*/

  const handlerDeleteButton = () => {
    try {
      expensesStoreInstance.deleteExpense(editedExpenseId);
      navigation.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  const handlerConfirmButton = () => {
    try {
      if (isEditing) {
        expensesStoreInstance.updateExpense(editedExpenseId, {
          description: 'Updated Test 200',
          amount: 40.2,
          date: new Date('2023-08-28'),
        });
      } else {
        expensesStoreInstance.addExpense({
          id: '',
          description: 'Add Test 200',
          amount: 16.59,
          date: new Date('2023-08-27'),
        });
      }
    } catch (err) {
      console.log(err);
    }
    navigation.goBack();
  };

  const handlerCancelButton = () => {
    try {
      navigation.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <ButtonInput
          style={[styles.button, styles.cancelButton]}
          onPress={handlerCancelButton}
          title={'Cancel'}
          titleStyle={[styles.buttonText, styles.cancelButtonText]}
        />
        <ButtonInput
          style={styles.button}
          onPress={handlerConfirmButton}
          title={isEditing ? 'Update' : 'Add'}
          titleStyle={styles.buttonText}
        />
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <ButtonDelete onPress={handlerDeleteButton} />
        </View>
      )}
    </View>
  );
});

export default ManageExpenseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: '#bf00ff',
    alignItems: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
    backgroundColor: '#3e04c3',
    borderRadius: 4,
    padding: 8,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  cancelButton: {
    backgroundColor: 'transparent',
  },
  cancelButtonText: {
    color: '#3e04c3',
  },
});
