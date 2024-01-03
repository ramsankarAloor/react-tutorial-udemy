import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesFilter from "./Expensefilter";

function Expenses(props) {
  const [filterdYear, setFilteredYear] = useState("2020");

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filterdYear
  );

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterdYear}
        onChangeFilter={filterChangeHandler}
      />

      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
