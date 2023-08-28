import {makeObservable, observable, action} from 'mobx';
import {Expense} from '../../services/expenses/interfaceExpense';
import {MOCK_EXPENSES} from '../../services/models/expenseModel';

class ExpensesStore {
  expenses: Expense[] = MOCK_EXPENSES;

  constructor() {
    makeObservable(this, {
      expenses: observable,
      addExpense: action,
      deleteExpense: action,
      updateExpense: action,
    });
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
}

export default ExpensesStore;
