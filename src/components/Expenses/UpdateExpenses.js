import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

function UpdateExpenses(props) {
  console.log(props);
  console.log(props.expense.date);
  const [enteredDate, setEnteredDate] = useState(props.expense.date);
  const [enteredAmount, setEnteredAmount] = useState(props.expense.amount);
  const [enteredTitle, setEnteredTitle] = useState(props.expense.title);

  console.log("enteredDate", enteredDate);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(parseInt(event.target.value));
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  return (
    <Dialog open={props.show} onClose={() => props.setShow(false)}>
      <DialogTitle>Transaction Details</DialogTitle>
      <DialogContent dividers>
        <DialogContentText>
          {/* <div className="dialog-Box">
              <UpdateExpenses
                date={props.date}
                amount={props.amount}
                title={props.title}
                updateExpense={(expense) => props.updateExpense(expense)}
              />
            </div> */}
          <div>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <label>
                Title
                <input
                  type="text"
                  defaultvalue={enteredTitle}
                  value={enteredTitle}
                  onChange={titleChangeHandler}
                />
              </label>
              <label>
                Amount
                <input
                  type="number"
                  defaultvalue={enteredAmount}
                  value={enteredAmount}
                  onChange={amountChangeHandler}
                />
              </label>
              <label>
                Date
                <input
                  type="date"
                  // defaultvalue={enteredDate}
                  value={enteredDate}
                  onChange={dateChangeHandler}
                />
              </label>
            </form>
          </div>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={() => props.setShow(false)}>
          Close
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            props.updateExpense({
              id: props.expense.id,
              title: enteredTitle,
              date: enteredDate,
              amount: enteredAmount,
            });
            props.setShow(false);
          }}
        >
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default UpdateExpenses;
