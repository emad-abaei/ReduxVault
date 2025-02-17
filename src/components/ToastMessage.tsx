import { ToastContentProps } from "react-toastify";
import { FaCheck, FaExclamation } from "react-icons/fa6";

type CustomNotificationProps = ToastContentProps<{
  type: string;
  title: string;
  message: string;
}>;

function ToastMessage({ data }: CustomNotificationProps) {
  return (
    <div role={data.type === "success" ? "status" : "alert"} aria-live='polite'>
      <h3
        className={`${
          data.type === "success" ? "text-emerald-600" : "text-rose-600"
        } font-light flex items-center gap-1`}>
        {data.type === "success" ? (
          <FaCheck size={18} />
        ) : (
          <FaExclamation size={16} />
        )}

        {data.title}
      </h3>
      <p className='text-gray-700'>{data.message}</p>
    </div>
  );
}

export default ToastMessage;
