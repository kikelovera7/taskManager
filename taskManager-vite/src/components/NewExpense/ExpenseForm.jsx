import { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm() {

/*     
    const [title,setTitle]=useState('');
    const [amount,setAmount]=useState('');
    const [date,setDate]=useState(''); 
*/

    const [formValues,setValues] = useState({
        enteredTitle:'',
        enteredAmount:'',
        enteredDate:''
    })
    //estamos actualizando el estado basandonos en el estado anterior, eso no es una buena practica
    // lo mejor es cuando dependamos del estado anterior deberiamos pasarle una funcion al setState
    const inputTitleHandler = (e)=>{
        setValues({
            ...formValues,
            enteredTitle:e.target.value
        })
    }

    //ie:
    const inputTitleHandler2 = (e)=>{
        setValues((prevState)=>{
            return {
            ...prevState,
            enteredTitle:e.target.value
            };
        })
    };



    const inputAmountHandler = (e)=>{
        setValues((prevState)=>{
            return {
            ...prevState,
            enteredAmount:e.target.value
            };
        })
    };

    
    const inputDateHandler = (e)=>{
        setValues((prevState)=>{
            return {
            ...prevState,
            enteredDate:e.target.value
            };
        })
    };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">TITLE</label>
          <input type="text" onChange={inputTitleHandler2} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">AMOUNT</label>
          <input type="number" onChange={inputAmountHandler}/>
        </div>
        <div className="new-expense__control">
          <label htmlFor="">DATE</label>
          <input type="date" min="2023-01-01" max="2023-12-31" onChange={inputDateHandler} />
        </div>
        <div className="new-expense-__actions">
            <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
}
