import * as React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';

interface ExpenseItemProps {
  id: string;
  description: string;
  amount: number;
  date: Date;
}

const ExpenseItem = ({description, amount, date}: ExpenseItemProps) => {
  return (
    <Pressable style={styles.expenseItem}>
      <View style={styles.expenseDetails}>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.date}>{date.toISOString()}</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.amount}>R$ {amount.toFixed(2)}</Text>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: '#993399',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
  },
  description: {
    color: '#e4d9fd',
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  date: {
    color: '#e4d9fd',
  },
  amountContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  amount: {
    color: '#993399',
    fontWeight: 'bold',
  },
  expenseDetails: {
    flex: 1,
  },
});
