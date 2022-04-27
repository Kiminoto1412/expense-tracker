import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./component/Layout";
import { TransactionContextProvider } from "./context/TransactionContext";
import Home from "./Page/Home";
import TransactionAction from "./Page/TransactionAction";

function App() {
  return (
    <TransactionContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="new" element={<TransactionAction />} />
          {/* <Route
          //sactionที่มี: จะไม่เหมือนเป๊ะก็ได้ ส่วนsactionที่ไม่มี: จะต้องเหมือนแบบ exactly
          path="transaction/:transactionId/category/:cId"
          element={<TransactionAction />}
        /> */}
          <Route
            path="transaction/:transactionId"
            element={<TransactionAction />}
          />

          <Route
            index
            //set default page เป็นhome
            //element={<div className="text-white">This is Default Page</div>}
            elementment={<Navigate to="/home" />}
          />
        </Route>
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </TransactionContextProvider>
  );
}

export default App;
