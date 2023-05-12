import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseAll.css";
import Card from "../UI/Card";

const ExpenseAll = ({ expenses, year, updateExpense }) => {
  console.log("expenses", expenses);
  // const [filteredYear, setFilteredYear] = useState(year);

  // const filterChangeHandler = (selectedYear) => {
  //   setFilteredYear(selectedYear);
  // };

  const filteredExpenses = expenses.filter((expenses) => {
    return new Date(expenses.date).getFullYear().toString() === year;
  });

  return (
    <div>
      <Card className="expenses">
        {filteredExpenses.length === 0 ? (
          <p> No Expenses Found </p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              // title={expense.title}
              // amount={expense.amount}
              // date={expense.date}
              expense={expense}
              updateExpense={(expense) => updateExpense(expense)}
            />
          ))
        )}
      </Card>
    </div>
  );
};

export default ExpenseAll;
