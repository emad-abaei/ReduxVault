import { FormEvent, ReactNode } from "react";

interface FormProps {
  label: string;
  children: ReactNode;
  onSubmit?: (e: FormEvent) => void;
}

function Form({ label, children, onSubmit }: FormProps) {
  return (
    <form className='mt-4 text-gray-800' onSubmit={onSubmit}>
      <label>
        {label}
        <div className='grid gap-2 sm:grid-cols-2 md:grid-cols-3'>
          {children}
        </div>
      </label>
    </form>
  );
}

export default Form;
