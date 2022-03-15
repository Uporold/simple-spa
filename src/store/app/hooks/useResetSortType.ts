import { useCallback } from "react";
import { useStoreDispatch } from "../../reducer";
import { RESET_SORT_TYPE } from "../app";

export const useResetSortType = () => {
  const dispatch = useStoreDispatch();

  return useCallback(() => {
    dispatch(RESET_SORT_TYPE());
  }, [dispatch]);
};
