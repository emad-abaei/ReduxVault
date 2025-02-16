import { Dispatch, SetStateAction } from "react";

type ActiveOperationType = "deposit" | "withdraw" | "loan";
const tabs: ActiveOperationType[] = ["deposit", "withdraw", "loan"];

interface TabsProps {
  activeOperation: string;
  onActiveOperation: Dispatch<SetStateAction<ActiveOperationType>>;
}

function Tabs({ activeOperation, onActiveOperation }: TabsProps) {
  return (
    <div className='inline-block md:hidden backdrop-blur-sm  bg-white/05 py-1 border rounded-md text-gray-500'>
      {tabs.map((tab) => (
        <span
          className={`my-3 px-4 sm:px-6 py-1 cursor-pointer transition ${
            activeOperation === tab
              ? "bg-white/70 my-3 rounded-md text-gray-800 "
              : "hover:bg-white/20 hover:my-3 hover:px-4 hover:sm:px-6 hover:rounded-md"
          }`}
          onClick={() => onActiveOperation(tab)}
          key={tab}>
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </span>
      ))}
    </div>
  );
}

export default Tabs;
