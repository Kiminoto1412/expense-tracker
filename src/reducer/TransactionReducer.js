const FETCH_TRANSACTION = "FETCH_TRANSACTION";

function transactionReducer(state, action) {
  switch (action.type) {
    case "FETCH_TRANSACTION": {
      //dispatch({type : FETCH_TRANSACTION , value : {transactions : [] }})
    //   return [...action.value.transactions];
      return action.value.transactions; //ไม่ต้องทำแบบข้างบนก็ได้ เพราะtransactionมันเป็นarrayอยู่แล้ว
    }

    default:
      return state;
  }
}
export { transactionReducer , FETCH_TRANSACTION};
