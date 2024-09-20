import { expenseList } from "./app.js";
import { sumofExpenses } from "./References.js";

export const updateTotalExpenses = () => {
  const totalAmount = expenseList.reduce((acc, cur) => acc + cur.amount, 0);
  sumofExpenses.textContent = `Total Expenses: ${totalAmount}`;
};
