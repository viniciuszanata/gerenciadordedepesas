import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface ManageExpenseScreenProps {
  route: any;
}

const ManageExpenseScreen = ({route}: ManageExpenseScreenProps) => {
  const editedExpenseId = route.params?.expenseId;
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
