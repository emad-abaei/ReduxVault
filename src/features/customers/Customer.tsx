import { useSelector } from "react-redux";
import { RootStateType } from "../../store";
import BalanceDisplay from "../../features/accounts/BalanceDisplay";
import Box from "../../components/reusables/Box";

function Customer() {
  const customer = useSelector(
    (store: RootStateType) => store.customer.fullName
  );

  return (
    <Box>
      <div className='flex justify-between items-center'>
        <h2 className='text-xl text-gray-700'>
          Welcome, {customer.toUpperCase()}
        </h2>
        <BalanceDisplay />
      </div>
    </Box>
  );
}

export default Customer;
