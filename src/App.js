import React, { useState } from "react";
import ExpenseAll from "./components/Expenses/ExpenseAll";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseSummary from "./components/Expenses/ExpenseSummary";
import ExpenseFilter from "./components/ExpenseFilter/ExpenseFilter";

const Dummy_Expenses = [
  {
    id: "e1",
    title: "CarInsurance",
    amount: 300,
    date: "2023-05-06",
    // date: new Date(2023, 3, 6),
  },
  {
    id: "e2",
    title: "TV",
    amount: 400,
    date: "2023-05-07",
    // date: new Date(2023, 4, 16),
  },
  {
    id: "e3",
    title: "Car",
    amount: 3000,
    date: "2023-05-08",
    // date: new Date(2023, 11, 26),
  },
  {
    id: "e4",
    title: "New Desk",
    amount: 300,
    date: "2023-04-09",
    // date: new Date(2023, 8, 10),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(Dummy_Expenses);
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  const updateExpenseHandler = (expense) => {
    console.log("newExpense", expense);
    const currentExpense = expenses.find((e) => e.id === expense.id);
    console.log("currentExpense", currentExpense);
    currentExpense.amount = expense.amount;
    currentExpense.title = expense.title;
    currentExpense.date = expense.date;
    // console.log(expense.date, typeof expense.date);
    setExpenses([...expenses]);
    // console.log("expense", expense);
    // setExpenses((prevExpenses) => {
    //   return [expense, ...prevExpenses];
    // });
  };
  return (
    <div>
      <div className="expense_summary">
        <h2 className="expense_summary_Header">Expenses</h2>
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseSummary
          expenses={expenses}
          year={filteredYear}
          month={undefined}
        />
      </div>
      {
        // component , filter,
        //summary -> expenses, month, year
        //expense list -> expenses,
        //add expense, edit expense
      }

      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseAll
        expenses={expenses}
        year={filteredYear}
        updateExpense={(expense) => updateExpenseHandler(expense)}
      />
    </div>
  );
};

export default App;
