import './App.css'
import ExpenseItem from './components/Expenses/ExpenseItem'
import NewExpense from './components/NewExpense/NewExpense'
function App() {
  const expenses = [
    {title:'car insurance', date:new Date(), amount:1234.5},
    {title:'supermarket ', date:new Date(), amount:445.5},
    {title:'baby school', date:new Date(), amount:33331.5},
    {title:'university loan', date:new Date(), amount:7866.5}

  ]
  return (
    <>
      <NewExpense />
      {
      expenses.map((x,i) => {
        return <ExpenseItem key={i} value={x}></ExpenseItem>
      })
      }
    </>
  )
}

export default App
