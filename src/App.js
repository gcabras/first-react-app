import './App.css';
import React, { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMYEXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMYEXPENSES);
  // return React.createElement('div', {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, {expenses: expenses})
  // ); // alternative to the code below!!!!!! But using React
  const addExpenseHandler = (expense) => {
    // console.log("In App.js")
    // console.log(expense) // Here we have access to the data from the form! Via props
    // setExpenses([expense, ...expenses]) // spread array to populate the initial array to add the new expense
    // Most correct below
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  }


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
