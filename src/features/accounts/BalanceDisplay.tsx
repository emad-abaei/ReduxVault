import { useSelector } from "react-redux";
import { RootStateType } from "../../store";
import { formatCurrency } from "../../utils/helper";

function BalanceDisplay() {
  const balance = useSelector((store: RootStateType) => store.account.balance);

  return (
    <div role='region' aria-labelledby='account-balance'>
      <p className='text-lg text-primary' id='account-balance'>
        Your Balance: {formatCurrency(balance)}
      </p>
    </div>
  );
}

export default BalanceDisplay;
