import { amountInput, expenseInput, expenseForm } from "./References.js";

const expenseList = [];

expenseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const expenseName = event.target.expenseInput.value;
  const expenseAmount = Number(event.target.amountInput.value);

  expenseList.push({
    name: expenseName,
    amount: expenseAmount,
  });
});
