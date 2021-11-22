import "./ExpensesDate.css";
const ExpeneseDate = (proms) => {
  const month = proms.date.toLocaleString("en-US", { month: "long" });
  const day = proms.date.toLocaleString("en-US", { day: "2-digit" });
  const year = proms.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};
export default ExpeneseDate;
