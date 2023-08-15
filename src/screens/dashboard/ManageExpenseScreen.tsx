import React from 'react';
import {useLayoutEffect} from 'react';
import {View, StyleSheet} from 'react-native';
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

  return (
    <View style={styles.container}>
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
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: '#bf00ff',
    alignItems: 'center',
  },
  teste: {
    backgroundColor: 'red',
  },
});
