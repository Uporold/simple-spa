import { useCallback } from "react";
import { useStoreDispatch } from "../../reducer";
import { Operation } from "../user";

export const useLoadUser = () => {
  const dispatch = useStoreDispatch();

  return useCallback(
    (userId: string | undefined) => {
      dispatch(Operation.loadUser(userId));
    },
    [dispatch]
  );
};
