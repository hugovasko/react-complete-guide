import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [chosenYear, setChosenYear] = useState("2022");

  const selectedYearHolder = (selectedYear) => {
    setChosenYear(selectedYear);
  };

  const filterChosenYear = props.item.filter(expense => { 
    return expense.date.getFullYear().toString() === chosenYear;
  });

  let expenseContent = <p>No expenses found.</p>;

  if(filterChosenYear.length > 0){
    expenseContent = filterChosenYear.map((expenses) => (
      <ExpenseItem
        key = {expenses.id}
        title={expenses.title}
        amount={expenses.amount}
        date={expenses.date}
      />
    ));
  }

  return (
    <Card className="expenses">

      <ExpensesFilter
        startingYear={chosenYear}
        onSelectedYear={selectedYearHolder}
      />
      {expenseContent}
    </Card>
  );
};

export default Expenses;
