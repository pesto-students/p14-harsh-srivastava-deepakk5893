function createTransactionId() {
  let transactionCounter = 0;

  function generateTransactionId() {
    transactionCounter++;

    const transactionIdString = `TRANSACTION_ID_${transactionCounter}`;
    const transactionSymbol = Symbol(transactionIdString);
    return transactionSymbol;
  }
  return generateTransactionId;
}

const generateTransactionId = createTransactionId();

const transaction1 = generateTransactionId();
console.log(transaction1);

const transaction2 = generateTransactionId();
console.log(transaction2);

const transaction3 = generateTransactionId();
console.log(transaction3);
