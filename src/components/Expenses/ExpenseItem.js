import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const clickHandler = () => {
    console.log("button clicked!!");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        amount={props.amount}
        location={props.location}
        title={props.title}
      />
      <button onClick={clickHandler}>Click here</button>
    </Card>
  );
}

export default ExpenseItem;
