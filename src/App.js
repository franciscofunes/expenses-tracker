import React, { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const EXPENSES_DATA = [
  {
    id: 'e1',
    title: 'Papel higiénico',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'Television ', amount: 32000.00, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Seguro del auto',
    amount: 4500.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Nuevo Escritorio',
    amount: 8500,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(EXPENSES_DATA);

  const addExpenseHandlers = expense => {
    setExpenses(prevState => [expense , ...prevState]);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandlers}  />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
