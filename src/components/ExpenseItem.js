import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2023, 0, 3);
  const expenseAmount = 30;
  const expenseDescription = "Car insurance";
  const locationOfExpenditure = 'Mumbai';
  return (
    <div className="expense-item">
      <div>{expenseDate.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{expenseDescription}</h2>
        <h2>{locationOfExpenditure}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
