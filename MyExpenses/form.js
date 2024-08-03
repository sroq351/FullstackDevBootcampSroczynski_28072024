import { form } from "./MyExpenses/References.js";
import { expense } from "./MyExpenses/References.js";
import { amount } from "./MyExpenses/References.js";
import { addExpense } from "./MyExpenses/References.js";

const expenseList = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const expensenName = event.target.expense.value;
  const expenseAmount = Number(event.target.amount.value);
  expenseList.push({
    name: expensenName,
    amount: expenseAmount,
  });
});
