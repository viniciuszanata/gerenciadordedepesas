import {makeAutoObservable} from 'mobx';
import {Expense} from '../../services/expenses/interfaceExpense';
import {MOCK_EXPENSES} from '../../services/models/expenseModel';
import {getLastWeek} from '../../utils';

class ExpensesStoreMbx {
  public expenses: Expense[] = MOCK_EXPENSES;

  constructor() {
    makeAutoObservable(this);
  }

  addExpense(expenseData: Expense) {
    const nextId = this.getNextId();
    const newExpense = {...expenseData, id: nextId};
    this.expenses.push(newExpense);
  }

  getNextId() {
    const lastExpense = this.expenses[this.expenses.length - 1];
    const lastId = lastExpense ? parseInt(lastExpense.id, 10) : 0;
    return (lastId + 1).toString();
  }

  deleteExpense(id: string) {
    this.expenses = this.expenses.filter(expense => expense.id !== id);
  }

  updateExpense(id: string, expenseData: Partial<Expense>) {
    const index = this.expenses.findIndex(expense => expense.id === id);
    if (index !== -1) {
      this.expenses[index] = {...this.expenses[index], ...expenseData};
    }
  }

  getFilteredExpenses(filterType: 'all' | 'recent'): Expense[] {
    if (filterType === 'all') {
      return this.expenses;
    } else if (filterType === 'recent') {
      const today = new Date();
      const date7DaysAgo = getLastWeek(today, 7);
      return this.expenses.filter(expense => {
        const expenseDate = new Date(expense.date);
        return expenseDate >= date7DaysAgo && expenseDate <= today;
      });
    }
    return [];
  }
}

let singleton: ExpensesStoreMbx | null;

export const ExpensesStore = () => {
  if (!singleton) {
    singleton = new ExpensesStoreMbx();
  }
  return singleton;
};
