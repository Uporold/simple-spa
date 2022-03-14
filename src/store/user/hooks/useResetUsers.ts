import { useCallback } from "react";
import { useStoreDispatch } from "../../reducer";
import { RESET_USERS } from "../user";

export const useResetUsers = () => {
  const dispatch = useStoreDispatch();

  return useCallback(() => {
    dispatch(RESET_USERS());
  }, [dispatch]);
};
