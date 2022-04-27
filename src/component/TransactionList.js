import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import Transaction from "./Transaction";

function TransactionList() {
  //มาจากreturnของTransactionContext
  //transactions เป็นของที่ดึงมาจากapi ซึ่งเป็นarrayมี34ตัว แล้วก็มาmap
  const { transactions } = useContext(TransactionContext);

  return (
    <ul className="list-group">
      {transactions.map((el) => (
        <Transaction />
      ))}
    </ul>
  );
}

export default TransactionList;
