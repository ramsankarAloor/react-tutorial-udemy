import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import Card from "./Card";

function Expenses(props) {
  const expenseItems = props.items.map((expense) => (
    <ExpenseItem
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
      location={expense.location}
    />
  ));

  return <Card className="expenses">{expenseItems}</Card>;
}

export default Expenses;
