import { useState } from "react";
import Box from "../../components/reusables/Box";
import Tabs from "../../components/Tabs";
import FormDeposit from "./FormDeposit";
import FormWithdraw from "./FormWithdraw";
import FormLoan from "./FormLoan";

type ActiveOperationType = "deposit" | "withdraw" | "loan";

function AccountOperations() {
  const [activeOperation, setActiveOperation] =
    useState<ActiveOperationType>("deposit");

  return (
    <Box>
      <div className='flex flex-col items-center'>
        <h2 className='text-xl text-gray-700 text-center mb-4'>
          Your account operations
        </h2>

        <Tabs
          activeOperation={activeOperation}
          onActiveOperation={(tab) => setActiveOperation(tab)}
        />
      </div>

      {/* Large screens: Show all forms */}
      <div className='hidden md:block'>
        <FormDeposit />
        <FormWithdraw />
        <FormLoan />
      </div>

      {/* Small screens: Show only the active form */}
      <div className='block md:hidden'>
        {activeOperation === "deposit" && <FormDeposit />}
        {activeOperation === "withdraw" && <FormWithdraw />}
        {activeOperation === "loan" && <FormLoan />}
      </div>
    </Box>
  );
}

export default AccountOperations;
