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

    let expenseContent = <div>NO HAY EXPENSES PARA MOSTRAR EN ESTA FECHA</div>;
    if(filteredExpenses.length > 0){
        expenseContent = filteredExpenses.map((x,i) => {
            return <ExpenseItem key={i} value={x}></ExpenseItem>
            })
    }

    return (
        <div>
          <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {
                expenseContent

            }
          </Card>
        </div>
      );
}