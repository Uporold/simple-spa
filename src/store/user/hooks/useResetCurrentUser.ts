import { useCallback } from "react";
import { useStoreDispatch } from "../../reducer";
import { RESET_CURRENT_USER } from "../user";

export const useResetCurrentUser = () => {
  const dispatch = useStoreDispatch();

  return useCallback(() => {
    dispatch(RESET_CURRENT_USER());
  }, [dispatch]);
};
