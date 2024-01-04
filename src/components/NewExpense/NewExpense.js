import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);
  
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const setEditingHandler = () => {
    setIsEditing(true);
  };

  const closeEditingHandler=()=>{
    setIsEditing(false)
  }

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={setEditingHandler}>Add Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onClose={closeEditingHandler}/>}
    </div>
  );
}

export default NewExpense;
