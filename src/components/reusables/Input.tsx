import { ChangeEvent, ReactNode } from "react";

interface InputProps {
  val: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  children?: ReactNode;
  type?: string;
  placeholder?: string;
  expand?: boolean;
}

function Input({
  val,
  onChange,
  type = "text",
  placeholder = "",
  expand = false
}: InputProps) {
  return (
    <input
      type={type}
      className={`border-gray-100 rounded hover:border-gray-200 focus:ring-0 focus:border-gray-300 ${
        expand && "md:col-span-2"
      }`}
      value={val}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default Input;
