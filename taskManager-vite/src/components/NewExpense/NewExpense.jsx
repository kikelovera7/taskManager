import './NewExpense.css'
import ExpenseForm from './ExpenseForm';


export default function NewExpense(props){

    const formHandler = (formData)=>{
        props.addNewExpense(formData)
    }
    return(
        <div className='new-expense'>
            <ExpenseForm formHandler={formHandler}></ExpenseForm>
        </div>
    );
}