import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses({ expenses }) {
  return (
    <div className="expenses">
      <ExpenseItem {...expenses[0]} />
      <ExpenseItem {...expenses[1]} />
      <ExpenseItem {...expenses[2]} />
      <ExpenseItem {...expenses[3]} />
    </div>
  );
}

export default Expenses;
