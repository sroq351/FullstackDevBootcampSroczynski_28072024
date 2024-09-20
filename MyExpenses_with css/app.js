import { expenseForm, listofExpenses } from "./References.js";
import { updateTotalExpenses } from "./updateTotalExpenses.js";

export const expenseList = [];

expenseForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const expenseName = event.target.expense.value;
  const expenseAmount = Number(event.target.amount.value);

  expenseList.push({
    name: expenseName,
    amount: expenseAmount,
  });
  listofExpenses.replaceChildren();

  expenseList.forEach((expense, elementToRemoveIndex) => {
    const li = document.createElement("li");
    li.className = "list-group-item list";
    li.textContent = `${expense.name}: ${expense.amount}`;
    listofExpenses.appendChild(li);
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "btn btn-danger button";
    removeButton.addEventListener("click", () => {
      expenseList.splice(elementToRemoveIndex, 1);
      listofExpenses.removeChild(li);
      updateTotalExpenses();
    });
    li.appendChild(removeButton);
  });
  updateTotalExpenses();
});
