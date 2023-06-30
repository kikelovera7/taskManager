import { useState } from 'react'
import './App.css'
import NewExpense from './components/NewExpense/NewExpense'
import Expenses from './components/Expenses/Expenses'

function App() {

  

  const expenses = [
    {title:'car insurance', date:new Date(), amount:1234.5},
    {title:'supermarket ', date:new Date(), amount:445.5},
    {title:'baby school', date:new Date(), amount:33331.5},
    {title:'university loan', date:new Date(), amount:7866.5}

  ]

  const [currentExp,setCurrentExp] = useState(expenses);

  const addNewExpenseHandler=(newExpense)=>{

    const expense = {
      title: newExpense.enteredTitle,
      date: new Date(newExpense.enteredDate), 
      amount: newExpense.enteredAmount
    }

    setCurrentExp((prevState)=>{
      return [...prevState,expense];
    });
  };



  return (
    <>
      <NewExpense addNewExpense={addNewExpenseHandler}/>
      <Expenses exp={currentExp}></Expenses>
    </>
  )
}

export default App
