import { FormEvent, useState } from "react";
import { useSelector } from "react-redux";
import { RootStateType } from "../../store";
import { withdraw } from "./AccountSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { notify } from "../../utils/helper";
import Form from "../../components/reusables/Form";
import Button from "../../components/reusables/Button";
import Input from "../../components/reusables/Input";

function FormWithdraw() {
  const [withdrawalAmount, setWithdrawalAmount] = useState<string>("");
  const dispatch = useAppDispatch();
  const { balance: currentBalance } = useSelector(
    (store: RootStateType) => store.account
  );

  function handleWithdrawal(e: FormEvent) {
    e.preventDefault();

    if (!withdrawalAmount || Number(withdrawalAmount) <= 0) {
      notify({
        type: "error",
        title: "Withdrawal Failed",
        message: "Please enter a valid amount greater than zero."
      });
      return;
    }

    if (Number(withdrawalAmount) > currentBalance) {
      notify({
        type: "error",
        title: "Withdrawal Failed",
        message: `Your balance is insufficient to withdraw $${withdrawalAmount}`
      });
      return;
    }

    dispatch(withdraw(+withdrawalAmount));
    notify({
      type: "success",
      title: "Withdrawal Successful",
      message: `You have successfully withdrawn $${withdrawalAmount}.`
    });
    setWithdrawalAmount("");
  }

  return (
    <Form onSubmit={(e: FormEvent) => handleWithdrawal(e)}>
      <Input
        label='Withdraw'
        type='number'
        placeholder='amount'
        val={withdrawalAmount}
        onChange={(e) => setWithdrawalAmount(e.target.value)}
        expand
      />

      <Button>
        Withdraw {Number(withdrawalAmount) > 0 && "$"}
        {Number(withdrawalAmount) > 0 && withdrawalAmount}
      </Button>
    </Form>
  );
}

export default FormWithdraw;
