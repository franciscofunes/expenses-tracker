import React, { useState } from 'react'
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card'
import './Expenses.css';

const Expenses = (props) => {

    const [yearSelected, setYearSelected] = useState('2021');

    const saveYearChangeHandler = (enteredYearFilter) => {
        setYearSelected(enteredYearFilter);
    };

    const filteredExpenses = props.items.filter(expense => {
        if (yearSelected === 'all') {
            return true;
        }else{
            return expense.date.getFullYear().toString() === yearSelected;
        }
    });

    return (
        <div>
          <Card className="expenses">
              <ExpensesFilter
                  defaultYear={yearSelected}
                  onSaveYearFilter={saveYearChangeHandler}
              />
              <ExpensesChart expenses={filteredExpenses} />
              <ExpensesList items={filteredExpenses} listSelection={yearSelected} allItems={props.items} />
          </Card>
        </div>
    );
};

export default Expenses
