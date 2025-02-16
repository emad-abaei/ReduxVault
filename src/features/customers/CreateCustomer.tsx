import { FormEvent, useState } from "react";
import { createCustomer } from "./CustomerSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { notify } from "../../utils/helper";
import Box from "../../components/reusables/Box";
import Input from "../../components/reusables/Input";
import Button from "../../components/reusables/Button";

function Customer() {
  const [fullName, setFullName] = useState<string>("");
  const [nationalId, setNationalId] = useState<string>("");
  const dispatch = useAppDispatch();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!fullName || !nationalId) {
      notify({
        type: "error",
        title: "Login Incomplete",
        message:
          "Please fill in both fields. You can use any Name and ID Number to continue."
      });
      return;
    }

    dispatch(createCustomer(fullName, nationalId));
    notify({
      type: "success",
      title: "Welcome!",
      message: "You’ve successfully entered the app. Enjoy exploring!"
    });
  }

  return (
    <Box newCustomer>
      <h2 className='text-3xl text-gray-700 mb-4'>Create new customer</h2>
      <form
        className='mt-4 text-gray-800 flex flex-col'
        onSubmit={(e) => handleSubmit(e)}>
        <label className='flex flex-col mb-4'>
          Name
          <Input val={fullName} onChange={(e) => setFullName(e.target.value)} />
        </label>

        <label className='flex flex-col mb-5'>
          ID Number
          <Input
            val={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </label>
        <div className='sm:place-self-end'>
          <Button>Create new customer</Button>
        </div>
      </form>
    </Box>
  );
}

export default Customer;
