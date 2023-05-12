import React, { useEffect, useState } from "react";
import "./ExpenseSummary.css";

function TotalExpenses({ month, year, expenses }) {
  const [totalMonthlyExpense, setTotalMonthlyExpense] = useState(0);
  const [totalYearlyExpense, setTotalYearlyExpense] = useState(0);

  console.log(month, year, expenses);

  useEffect(() => {
    const today = new Date();

    const selectedYear = year || today.getFullYear();
    const selectedMonth = month || today.getMonth();

    console.log("selectedYear", typeof selectedYear);
    console.log("selectedMonth", typeof selectedMonth);

    // let yearlyExpenses = expenses.filter((pobj) => {
    //   return selectedYear === pobj.date.getFullYear().toString();
    // });

    // let monthlyExpenses = yearlyExpenses.filter((pobj, pind) => {
    //   return selectedMonth === pobj.date.getMonth().toString();
    // });

    let yearlyExpenses = expenses.filter((pobj) => {
      return selectedYear === pobj.date.substring(0, 4);
    });

    let monthlyExpenses = yearlyExpenses.filter((pobj, pind) => {
      return selectedMonth === parseInt(pobj.date.substring(5, 7)) - 1;
    });

    let totalYearlyExpense = yearlyExpenses.reduce((acc, curr) => {
      return acc + curr.amount;
    }, 0);

    let totalMonthlyExpense = monthlyExpenses.reduce((acc, curr) => {
      return acc + curr.amount;
    }, 0);

    setTotalMonthlyExpense(totalMonthlyExpense);
    setTotalYearlyExpense(totalYearlyExpense);
    // SetTotalExpense(totalExpenses);

    //const filterYear = props.selectedYear || console.log(currentMonth);

    //let monthlyExpense = SetMonthlyExpense(monthlyExpense);
  }, [month, year, expenses]);

  console.log(totalMonthlyExpense, totalYearlyExpense);

  return (
    // <div className="expense_summary">
    //   <h2 className="expense_summary_Header">Expenses</h2>
    //   <div className="Input-Boxes">
    //     <div className="Expense_Box_cls">
    //       <p>This Month</p>
    //       <p>{monthlyExpense}</p>
    //     </div>
    //     <div className="Expense_Box_cls">
    //       <p>Total Expense</p>
    //       <p>{TotalExpense}</p>
    //     </div>
    //   </div>
    // </div>
    <div className="Input-Boxes">
      <div className="Expense_Box_cls">
        <p>This Month</p>
        <p>{totalMonthlyExpense}</p>
      </div>
      <div className="Expense_Box_cls">
        <p>Total this year</p>
        <p>{totalYearlyExpense}</p>
      </div>
    </div>
  );
}

export default TotalExpenses;
