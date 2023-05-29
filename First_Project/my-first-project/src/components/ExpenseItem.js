import './ExpenseItem.css';
function ExpenseItem(){
    const expenseDate= new Date(2021,2,28);
    const expenseTitle='Car Insurance';
    const expenseAmount=294.56;



return (
    <div className="expense-item">  
        {/* <div>March 28th 2021</div> */}
        {/* <div>{expenseDate}</div> */}
        <div>{expenseDate.toLocaleDateString()}</div>
<h2>{expenseTitle}</h2>
<div className="expense-item__description">Car Insurance</div>
<div className='expense-item__price'>${expenseAmount}</div>
</div>
);
}
export default ExpenseItem