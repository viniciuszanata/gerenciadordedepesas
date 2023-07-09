import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface ManageExpenseScreenProps {}

const ManageExpenseScreen = (props: ManageExpenseScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>ManageExpense</Text>
    </View>
  );
};

export default ManageExpenseScreen;

const styles = StyleSheet.create({
  container: {},
});
