import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart'
import "./Expenses.css"

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2019');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  });

  return (
    <div>

      <Card className='expenses'>
      <ExpenseFilter startingYear={filteredYear} onFilterChange={filterChangeHandler}/>
      <ExpensesChart expenses={filteredExpenses} />
       {/* Dynamic rendering of the component*/}
      <ExpensesList expenses={filteredExpenses}/>
        {/* <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}/>
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}/>
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date} />
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date} /> */}
      </Card>
    </div>
  )
}

export default Expenses;
