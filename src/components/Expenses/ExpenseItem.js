import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const [amount, setAmount] = useState(props.amount);

  const clickHandler = () => {
    setAmount(100);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        amount={amount}
        location={props.location}
        title={props.title}
      />
      <button onClick={clickHandler}>Set expense to 100</button>
    </Card>
  );
}

export default ExpenseItem;
