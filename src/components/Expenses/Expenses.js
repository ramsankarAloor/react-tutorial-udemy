import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesFilter from "./Expensefilter";

function Expenses(props) {
  const [filterdYear, setFilteredYear] = useState("2020");
  const expenseItems = props.items.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterdYear}
        onChangeFilter={filterChangeHandler}
      />
      {expenseItems}
    </Card>
  );
}

export default Expenses;
