import './ExpenseDate.css'
import React from 'react';

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-Us", { daay: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className='expense-date'>
      {/* <div>March 28th 2021</div> */}
      {/* <div>{expenseDate}</div> */}
      {/* <div>{props.date.toLocaleDateString()}</div> */}
      {/* <div>{props.date.toLocaleString("en-Us", { month: "long" })}</div> */}
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{day}</div>
      <div className='expense-date__day'>{year}</div>
    </div>
  );
}

export default ExpenseDate;
