import { createSlice } from "@reduxjs/toolkit";
import { SortType } from "../../const";

export const initialState = {
  currentSortType: SortType.DEFAULT as SortType,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    SET_SORT_TYPE(state, action) {
      state.currentSortType = action.payload;
    },
    RESET_SORT_TYPE() {
      return initialState;
    },
  },
});

export const { SET_SORT_TYPE, RESET_SORT_TYPE } = appSlice.actions;

export default appSlice.reducer;
