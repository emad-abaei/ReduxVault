import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      className='self-end sm:w-auto sm:col-start-2 sm:col-end-3 md:col-start-3 md:col-end-4 py-2 px-4 w-full rounded text-white bg-gradient-to-r from-indigo-400 to-violet-700 transition hover:brightness-110 border mt-3 sm:mt-0'
      onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
