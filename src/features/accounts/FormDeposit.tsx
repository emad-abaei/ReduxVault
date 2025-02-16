import { FormEvent, useState } from "react";
import { useSelector } from "react-redux";
import { RootStateType } from "../../store";
import { deposit } from "./AccountSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { notify } from "../../utils/helper";
import Form from "../../components/reusables/Form";
import Button from "../../components/reusables/Button";
import Input from "../../components/reusables/Input";

function FormDeposit() {
  const [depositAmount, setDepositAmount] = useState<string>("");
  const [currency, setCurrency] = useState<string>("USD");
  const dispatch = useAppDispatch();
  const { isLoading } = useSelector((store: RootStateType) => store.account);

  let currencySymbol: string = "$";
  if (currency === "USD") currencySymbol = "$";
  if (currency === "EUR") currencySymbol = "€";
  if (currency === "GBP") currencySymbol = "£";

  function handleDeposit(e: FormEvent) {
    e.preventDefault();

    if (!depositAmount || Number(depositAmount) <= 0) {
      notify({
        type: "error",
        title: "Deposit Failed",
        message: "Please enter a positive amount to proceed."
      });
      return;
    }

    dispatch(deposit(+depositAmount, currency));
    notify({
      type: "success",
      title: "Deposit Successful",
      message: `You have successfully deposited ${currencySymbol}${depositAmount}.`
    });
    setDepositAmount("");
    setCurrency("USD");
  }

  return (
    <Form label='Deposit' onSubmit={(e: FormEvent) => handleDeposit(e)}>
      <Input
        type='number'
        val={depositAmount}
        onChange={(e) => setDepositAmount(e.target.value)}
      />

      <select
        value={currency}
        className='block border-gray-100 hover:border-gray-200 focus:ring-0 focus:border-gray-300 rounded'
        onChange={(e) => setCurrency(e.target.value)}>
        <option value='USD'>US Dollar</option>
        <option value='EUR'>Euro</option>
        <option value='GBP'>British Pound</option>
      </select>

      <Button>
        {isLoading
          ? "Converting..."
          : `Deposit ${Number(depositAmount) > 0 ? currencySymbol : ""}${
              Number(depositAmount) > 0 ? depositAmount : ""
            }`}
      </Button>
    </Form>
  );
}

export default FormDeposit;
