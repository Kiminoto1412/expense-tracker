import { useParams } from "react-router-dom";
import TransactionForm from "../component/TransactionForm";

function TransactionAction() {
  const params = useParams();
  console.log(params); //{transactionId: '1234', cId: '2345'} ไป matchingกับ path="transaction/:transactionId/category/:cId"
  return <TransactionForm />;
}

export default TransactionAction;
