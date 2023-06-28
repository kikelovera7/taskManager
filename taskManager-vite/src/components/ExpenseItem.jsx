import './ExpenseItem.css';
import ExpenseDateItem from './ExpenseDateItem';

export default function ExpenseItem(props){
    const {value} = props;
    return (
        <div className='expense-item'>
            <ExpenseDateItem date={value.date}/>
            <div className='expense-item__description'>
                <h2>{props.value.title}</h2>
                <div className='expense-item__price'>{props.value.amount}</div>
            </div>
        </div>
    )
}