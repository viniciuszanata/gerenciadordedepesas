import React from 'react';
import {useLayoutEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {ButtonInput} from '../../components/input/button';
import {ButtonDelete} from '../../components/input/buttonDelete';

interface ManageExpenseScreenProps {
  route: any;
  navigation: any;
}

const ManageExpenseScreen = ({route, navigation}: ManageExpenseScreenProps) => {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  const handlerDeleteButton = () => {
    try {
      navigation.navigate('SignUpScreen' as never);
    } catch (err) {
      console.log(err);
    }
  };

  const handlerConfirmButton = () => {
    try {
      navigation.goBack();
    } catch (err) {
      console.log(err);
    }
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
};

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
