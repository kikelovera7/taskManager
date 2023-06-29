import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDateItem from "./ExpenseDateItem";
import { useState } from "react";

export default function ExpenseItem(props) {
  const [title, setTitle] = useState(props.value.title);

  const onClickHandler = () => {
    console.log("estas clickeando el boton");
    setTitle(title);
  };

  return (
    <div>
      <Card className="expense-item">
        <ExpenseDateItem date={props.value.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{props.value.amount}</div>
        </div>
        <button onClick={onClickHandler}>click here</button>
      </Card>
    </div>
  );
}
