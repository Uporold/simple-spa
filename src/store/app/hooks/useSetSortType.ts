import { useCallback } from "react";
import { useStoreDispatch } from "../../reducer";
import { SET_SORT_TYPE } from "../app";
import { SortType } from "../../../const";

export const useSetSortType = (): ((sortType: SortType) => void) => {
  const dispatch = useStoreDispatch();

  return useCallback(
    (sortType) => {
      dispatch(SET_SORT_TYPE(sortType));
    },
    [dispatch]
  );
};
