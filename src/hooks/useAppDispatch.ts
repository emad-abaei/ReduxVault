import { useDispatch } from "react-redux";
import type { AppDispatchType } from "../store";

export const useAppDispatch: () => AppDispatchType = useDispatch;
