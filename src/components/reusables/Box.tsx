import { ReactNode } from "react";

interface BoxProps {
  children: ReactNode;
  newCustomer?: boolean;
}

function Box({ children, newCustomer }: BoxProps) {
  return (
    <div
      className={`${
        newCustomer && "max-w-96 mx-auto"
      } backdrop-blur-md bg-white/30 my-5 p-4 sm:p-6 rounded-md z-10 border relative`}>
      {children}
    </div>
  );
}

export default Box;
