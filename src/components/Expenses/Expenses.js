import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [chosenYear, setChosenYear] = useState("2022");

  const selectedYearHolder = (selectedYear) => {
    setChosenYear(selectedYear);
  };

  const filterChosenYear = props.item.filter(expense => { 
    return expense.date.getFullYear().toString() === chosenYear;
  });

  

  return (
    <Card className="expenses">
      <ExpensesFilter
        startingYear={chosenYear}
        onSelectedYear={selectedYearHolder}
      />
      <ExpensesList items = {filterChosenYear}/>
    </Card>
  );
};

export default Expenses;
