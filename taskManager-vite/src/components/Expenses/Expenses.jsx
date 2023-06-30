import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import { useState } from "react";

export default function Expenses(props){

    const [filteredYear, setFilteredYear] = useState('');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.exp.filter((x)=>{
        return (x.date.getFullYear().toString() === filteredYear) || filteredYear == ''; 
    })

    return (
        <div>
          <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {
            filteredExpenses.map((x,i) => {
                return <ExpenseItem key={i} value={x}></ExpenseItem>
                })
            }
          </Card>
        </div>
      );
}