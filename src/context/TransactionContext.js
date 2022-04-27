import axios from "axios";
import { createContext, useReducer, useEffect } from "react";
import { FETCH_TRANSACTION,transactionReducer } from "../reducer/TransactionReducer";

const TransactionContext = createContext();

//destructuring props.children
function TransactionContextProvider({ children }) {
  const [state, dispatch] = useReducer(transactionReducer, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/transactions")
      .then((res) => {
        dispatch({type: FETCH_TRANSACTION , value: {transactions: res.data.transactions}});
      })
      .catch((err) => console.log(err));
  });
  return (
    <TransactionContext.Provider value={{transactions: state}}>
      {children}
    </TransactionContext.Provider>
  );
}

export { TransactionContext, TransactionContextProvider };
