import { FormEvent, useState } from "react";
import { useSelector } from "react-redux";
import store, { RootStateType } from "../../store";
import { payLoan, requestLoan } from "./AccountSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { notify } from "../../utils/helper";
import Input from "../../components/reusables/Input";
import Form from "../../components/reusables/Form";
import Button from "../../components/reusables/Button";

function FormLoan() {
  const [loanAmount, setLoanAmount] = useState<string>("");
  const [loanPurpose, setLoanPurpose] = useState<string>("");

  const dispatch = useAppDispatch();

  const {
    balance: currentBalance,
    loan: currentLoan,
    loanPurpose: currentLoanPurpose
  } = useSelector((store: RootStateType) => store.account);

  function handleRequestLoan(e: FormEvent) {
    e.preventDefault();

    if (!loanAmount || !loanPurpose) {
      notify({
        type: "error",
        title: "Incomplete Request",
        message:
          "Please enter a positive loan amount and specify the purpose of the loan."
      });
      return;
    }

    if (currentLoan > 0) {
      notify({
        type: "error",
        title: "Loan Request Denied",
        message:
          "You already have an outstanding loan. Please pay it off before requesting a new one."
      });
      return;
    }

    dispatch(requestLoan(+loanAmount, loanPurpose));
    notify({
      type: "success",
      title: "Loan Approved",
      message: `Your loan request for $${loanAmount} has been approved successfully. Purpose: ${loanPurpose}.`
    });
    setLoanAmount("");
    setLoanPurpose("");
    console.log(store.getState());
  }

  function handlePayLoan() {
    if (currentBalance < currentLoan) {
      notify({
        type: "error",
        title: "Payment Failed",
        message:
          "Your balance is insufficient to pay off the loan. Please deposit funds to proceed."
      });
      return;
    }

    dispatch(payLoan());
    notify({
      type: "success",
      title: "Loan Paid Off",
      message: "Your loan has been successfully paid off. Thank you!"
    });
  }

  return (
    <>
      <Form
        label='Request Loan'
        onSubmit={(e: FormEvent) => handleRequestLoan(e)}>
        <Input
          type='number'
          val={loanAmount}
          placeholder='loan amount'
          onChange={(e) => setLoanAmount(e.target.value)}
        />

        <Input
          type='text'
          val={loanPurpose}
          placeholder='loan purpose'
          onChange={(e) => setLoanPurpose(e.target.value)}
        />

        <Button>Request</Button>
      </Form>

      {currentLoan > 0 && (
        <div className='mt-4 text-gray-800'>
          <p>Pay Loan</p>
          <div className='grid gap-2 md:grid-cols-3'>
            <span className='flex items-center bg-gray-100 p-2 rounded md:col-span-2'>
              Pay ${currentLoan} - ({currentLoanPurpose})
            </span>
            <Button onClick={handlePayLoan}>Pay loan</Button>
          </div>
        </div>
      )}
    </>
  );
}

export default FormLoan;
