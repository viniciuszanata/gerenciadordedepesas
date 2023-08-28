import ExpensesStore from '../../store/expense/expenseStore';
export interface Expense {
  id: string;
  description: string;
  amount: number;
  date: Date;
}

export interface ExpensePeriod {
  expenses: Expense[];
  expensesPeriod: string;
  fallbackText?: string;
}
export interface ExpensesScreenProps {
  expensesStore?: ExpensesStore;
}
