import { useSelector } from "react-redux";
import type { StoreStateType } from "src/store";

export const useTestData = () => {
  return useSelector((state: StoreStateType) => state.user.testData);
};
