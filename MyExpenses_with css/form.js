import {
  amountInput,
  expenseInput,
  expenseForm,
  addExpenseButton,
  listofExpenses,
} from "./References.js";

const expenseList = [];

expenseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const expenseName = event.target.expense.value;
  const expenseAmount = Number(event.target.amount.value);

  expenseList.push({
    name: expenseName,
    amount: expenseAmount,
  });

  expenseList.forEach((expense) => {
    const li = document.createElement("li");
    li.textContent = expense;
    listofExpenses.appendChild("li");
  });
});
