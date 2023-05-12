import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

import UpdateExpenses from "./UpdateExpenses";

const ExpenseItem = (props) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          console.log("click");
          setShow(true);
        }}
        style={{ cursor: "pointer" }}
      >
        <Card className="expense-item">
          <ExpenseDate date={new Date(props.expense.date)} />
          <div className="expense-item__description">
            <h2>{props.expense.title}</h2>
            <div className="expense-item__price">${props.expense.amount}</div>
          </div>
        </Card>
      </div>
      <UpdateExpenses
        show={show}
        setShow={(show) => setShow(show)}
        expense={props.expense}
        updateExpense={(expense) => props.updateExpense(expense)}
      />
    </>
  );
};

export default ExpenseItem;
