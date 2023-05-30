import "./ExpenseItem.css";
import React,{useState} from 'react';
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card'
function ExpenseItem(props) {
const [title,SetTitle]=useState(props.title);

  
  // above things for props it should not store here but in app.js
  // after using props we can rid of these const
  //   const expenseDate = new Date(2021, 2, 28);
  //   const expenseTitle = "Car Insurance";
  //   const expenseAmount = 294.56;
  // below is just helper
  const clickHandler=()=>{SetTitle('Updated')};
  return (
    <Card className="expense-item">
  
      {/* // below is code if we write const wagerah but we are using props */}
      {/* <h2>{expenseTitle}</h2> */}
      {/* <h2>{props.title}</h2> */}
      {/* <ExpenseDate></ExpenseDate> */} 
       {/* as in do tag ke beech gap nahi he to  */}

      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
      {/* <button onClick={()=>{console.log("Click")}}>Change Titile</button> */}
      <button onClick={clickHandler}>Change Titile</button>



    </Card>
  );
}
export default ExpenseItem;
