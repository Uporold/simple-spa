import { useCallback } from "react";
import { useStoreDispatch } from "../../reducer";
import { Operation } from "../user";

export const useLoadUsers = () => {
  const dispatch = useStoreDispatch();

  return useCallback(() => {
    dispatch(Operation.loadUsers());
  }, [dispatch]);
};
