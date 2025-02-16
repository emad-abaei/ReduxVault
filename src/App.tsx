import { useSelector } from "react-redux";
import { RootStateType } from "./store";
import { ToastContainer, Zoom } from "react-toastify";
import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";
import AccountOperations from "./features/accounts/AccountOperations";
import Header from "./components/Header";
import Main from "./components/Main";
import Coins from "./components/Coins";

function App() {
  const fullName = useSelector(
    (store: RootStateType) => store.customer.fullName
  );

  return (
    <>
      <Header fullName={fullName} />
      <Main>
        {fullName ? (
          <>
            <Customer />
            <AccountOperations />
          </>
        ) : (
          <CreateCustomer />
        )}

        <Coins />
      </Main>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
        transition={Zoom}
      />
    </>
  );
}

export default App;
