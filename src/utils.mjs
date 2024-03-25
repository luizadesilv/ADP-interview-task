const getLastYearTransactions = (transactions) => {
  const lastYear = new Date().getFullYear() - 1;
  return transactions.filter((transaction) =>
    transaction.timeStamp.includes(lastYear)
  );
};

const getTotalTransactionsPerEmployee = (transactions) => {
  const lastYearTransactions = getLastYearTransactions(transactions);
  return lastYearTransactions.reduce((acc, transaction) => {
    acc[transaction.employee.id] =
      (acc[transaction.employee.id] || 0) + transaction.amount;
    return acc;
  }, {});
};

const getTopErnerId = (transactions) => {
  const employeeTotalTransactions =
    getTotalTransactionsPerEmployee(transactions);
  return Object.keys(employeeTotalTransactions).reduce((a, b) =>
    employeeTotalTransactions[a] > employeeTotalTransactions[b] ? a : b
  );
};

const getTopEarnerAlphaTransactions = (transactions) => {
  const lastYearTransactions = getLastYearTransactions(transactions);
  const topEarnerId = getTopErnerId(transactions);

  return lastYearTransactions.filter(
    (transaction) =>
      transaction.employee.id === topEarnerId && transaction.type === "alpha"
  );
};

const getTopEarnerTransactionIds = (transactions) => {
  const topEarnerAlphaTransactions =
    getTopEarnerAlphaTransactions(transactions);
  return topEarnerAlphaTransactions.map(({ transactionID }) => transactionID);
};

export { getTopEarnerTransactionIds };
