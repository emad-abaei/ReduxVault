import { ChangeEvent, ReactNode } from "react";

interface InputProps {
  label: string;
  val: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  children?: ReactNode;
  type?: string;
  placeholder?: string;
  expand?: boolean;
  id: string;
}

function Input({
  label,
  val,
  onChange,
  type = "text",
  placeholder = "",
  expand = false,
  id
}: InputProps) {
  return (
    <div className={`${expand ? "md:col-span-2" : ""}`}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        className={`w-full border-gray-100 rounded hover:border-gray-200 focus:ring-0 focus:border-gray-300 placeholder:text-gray-400`}
        value={val}
        onChange={onChange}
        placeholder={placeholder}
        aria-labelledby={id}
      />
    </div>
  );
}

export default Input;
