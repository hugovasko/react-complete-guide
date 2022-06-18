import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";


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
      <ExpensesChart expenses = {filterChosenYear}/>
      <ExpensesList items = {filterChosenYear}/>
    </Card>
  );
};

export default Expenses;
