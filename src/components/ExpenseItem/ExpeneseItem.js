import React from "react";
import ExpensesDate from "../ExpenseDate/ExpensesDate";
import "./ExpenseItem.css";
import Card from "../Card/Card";

const ExpenseItem = (props) => {
    return (
        <Card className="expense-item">
            <div>
                <ExpensesDate date={props.date}/>
            </div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
        </Card>
    );
};

export default ExpenseItem;
