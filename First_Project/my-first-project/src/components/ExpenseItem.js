import "./ExpenseItem.css";
function ExpenseItem(props) {
  // above things for props it should not store here but in app.js
  // after using props we can rid of these const
//   const expenseDate = new Date(2021, 2, 28);
//   const expenseTitle = "Car Insurance";
//   const expenseAmount = 294.56;

  return (
    <div className="expense-item">
      {/* <div>March 28th 2021</div> */}
      {/* <div>{expenseDate}</div> */}
      <div>{props.date.toLocaleDateString()}</div>
      {/* // below is code if we write const wagerah but we are using props */}
      {/* <h2>{expenseTitle}</h2> */}
      <h2>{props.title}</h2>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  );
}
export default ExpenseItem;
