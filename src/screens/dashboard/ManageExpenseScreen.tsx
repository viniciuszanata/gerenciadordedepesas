import * as React from 'react';
import {useLayoutEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';

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

  return (
    <View style={styles.container}>
      <Text>{editedExpenseId}</Text>
    </View>
  );
};

export default ManageExpenseScreen;

const styles = StyleSheet.create({
  container: {},
});
