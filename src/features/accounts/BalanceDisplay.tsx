import { useSelector } from "react-redux";
import { RootStateType } from "../../store";
import { formatCurrency } from "../../utils/helper";

function BalanceDisplay() {
  const balance = useSelector((store: RootStateType) => store.account.balance);

  return (
    <div className='text-lg text-primary'>
      Your Balance: {formatCurrency(balance)}
    </div>
  );
}

export default BalanceDisplay;
