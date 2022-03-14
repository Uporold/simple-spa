import { useSelector } from "react-redux";
import { RootState } from "../../reducer";
import { SortType } from "../../../const";

export const getSortType = (state: RootState): SortType =>
  state.app.currentSortType;

export const useCurrentSortType = (): SortType => {
  return useSelector(getSortType);
};
