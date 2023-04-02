import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState(''); // always an empty strings because by default we got strings from onChange events
  const [enteredDate, setEnteredDate] = useState('');

  // We can use also just one state, but passing an Object!
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // }); // To use single state approach


  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // Alternative approaches:
    // 2.
    // setUserInput({
    //   ...userInput, // JS Spread Operator! We are overwriting just title
    //   enteredTitle: event.target.value
    // }); // This is not correct completly because it does not take care of the previous state
    // 3.
    // With the following approach, React always take care of the previous state to update the event.target
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  }

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };
    props.onSaveExpenseData(expenseData); // onSaveExpenseData is prop of ExpenseForm which points to a function taking an object as parameter!
    // Two-Way Binding: To Clear the input fields after submission
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text'
            value={enteredTitle}
            onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number'
            value={enteredAmount}
            min='0.01' step='0.01'
            onChange={amountChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date'
            value={enteredDate}
            min='2019-01-01' max='2022-12-31'
            onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
};

export default ExpenseForm;
