// Find out which year was the prior one and filter for transactions from that last year
const getLastYearTransactions = (transactions) => {
  const lastYear = new Date().getFullYear() - 1;
  return transactions.filter((transaction) =>
    transaction.timeStamp.includes(lastYear)
  );
};

// Calculate the total transaction amount per employee for the last year, through reduce function, accumulate the total amount of transactions for each employee.
const getTotalTransactionsPerEmployee = (transactions) => {
  const lastYearTransactions = getLastYearTransactions(transactions);
  return lastYearTransactions.reduce((acc, transaction) => {
    acc[transaction.employee.id] =
      (acc[transaction.employee.id] || 0) + transaction.amount;
    return acc;
  }, {});
};

// Find the ID of the employee with the highest total transaction amount. The reduce function iterates over these IDs, comparing the total amount of each employee and it keeps the ID of the employee with the higher total transaction amount, resulting in the ID of the employee with the highest total transaction amount at the end.

const getTopEarnerId = (transactions) => {
  const employeeTotalTransactions =
    getTotalTransactionsPerEmployee(transactions);
  return Object.keys(employeeTotalTransactions).reduce((a, b) =>
    employeeTotalTransactions[a] > employeeTotalTransactions[b] ? a : b
  );
};

// Filter for transactions from the top earner employee of the last year that match a specific transaction type.
const getTopEarnerTransactionsByType = (transactions, transactionType) => {
  const lastYearTransactions = getLastYearTransactions(transactions);
  const topEarnerId = getTopEarnerId(transactions);

  return lastYearTransactions.filter(
    (transaction) =>
      transaction.employee.id === topEarnerId &&
      transaction.type === transactionType
  );
};

// Get the transaction IDs of a specific type of the top earner employee from the last year. It uses the map function to create a new array containing only the transaction IDs from the original array.
const getTopEarnerTransactionIds = (transactions, transactionType) => {
  const topEarnerTransactionsByType = getTopEarnerTransactionsByType(
    transactions,
    transactionType
  );
  return topEarnerTransactionsByType.map(({ transactionID }) => transactionID);
};

export { getTopEarnerTransactionIds };
