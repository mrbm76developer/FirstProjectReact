import React from "react";
import './NewExpenses.css';
import Card from "../Card/Card";
import FormExpenses from "../FormExpenses/FormExpenses";

const NewExpenses = (props) => {
    const SaveExpensesData= (enteredData)=>{
        const expenseData={
            ...enteredData,
            id:Math.random().toString()
        }
        props.addExpense(expenseData);
    }
    return (
        <Card className="new-expense">
            <FormExpenses onSaveExpensesData={SaveExpensesData}/>
        </Card>
    );
}
export default NewExpenses;