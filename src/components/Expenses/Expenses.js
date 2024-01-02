import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import Card from "../UI/Card";

function Expenses(props) {
  const expenseItems = props.items.map((expense) => (
    <ExpenseItem
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));

  return <Card className="expenses">{expenseItems}</Card>;
}

export default Expenses;
