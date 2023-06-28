import './ExpenseItem.css';
import Card from './Card';
import ExpenseDateItem from './ExpenseDateItem';

export default function ExpenseItem(props){
    
    return (
        <Card className='expense-item'>
            <ExpenseDateItem date={props.value.date}/>
            <div className='expense-item__description'>
                <h2>{props.value.title}</h2>
                <div className='expense-item__price'>{props.value.amount}</div>
            </div>
        </Card>
    )
}