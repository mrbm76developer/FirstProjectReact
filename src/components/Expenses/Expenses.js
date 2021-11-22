import React, {useState} from "react";
import ExpenseItem from "../ExpenseItem/ExpeneseItem";
import "./Expenses.css";
import Card from "../Card/Card";
import ExpensesFilter from "../ExpenseItem/ExpensesFilter/ExpensesFilter";

const Expenses = (props) => {
    const [filterYear, setFilterYear] = useState('2020');
    const changeFilterHandler = (filter) => {
        setFilterYear(filter);
    }
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filterYear} onChangeFilter={changeFilterHandler}/>
            {props.items.map(expenses => <ExpenseItem
                title={expenses.title}
                amount={expenses.amount}
                date={expenses.date}
            />)}
        </Card>
    );
};
export default Expenses;
