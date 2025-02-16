import { FormEvent, ReactNode } from "react";

interface FormProps {
  children: ReactNode;
  onSubmit?: (e: FormEvent) => void;
}

function Form({ children, onSubmit }: FormProps) {
  return (
    <form className='mt-4 text-gray-800' onSubmit={onSubmit}>
      <div className='grid gap-2 sm:grid-cols-2 md:grid-cols-3'>{children}</div>
    </form>
  );
}

export default Form;
