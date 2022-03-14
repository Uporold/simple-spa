import { createSlice } from "@reduxjs/toolkit";
import { FormUser, User } from "../../api/types";
import { AppThunk } from "../reducer";
import { ApiService } from "../../api/api-service";

export const initialState = {
  users: [] as User[],
  currentUser: {} as FormUser,
  isUsersLoaded: false,
  isUserLoaded: false,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    SET_USERS(state, action) {
      state.users = action.payload;
    },
    SET_CURRENT_USER(state, action) {
      state.currentUser = action.payload;
    },
    SET_USERS_LOADING_STATUS(state, action) {
      state.isUsersLoaded = action.payload;
    },
    SET_USER_LOADING_STATUS(state, action) {
      state.isUserLoaded = action.payload;
    },
    RESET_USERS(state) {
      state.users = [];
      state.isUsersLoaded = false;
    },
    RESET_CURRENT_USER(state) {
      state.currentUser = {} as FormUser;
      state.isUserLoaded = false;
    },
  },
});

export const Operation = {
  loadUsers: (): AppThunk => async (dispatch) => {
    const loadedUsers = await ApiService.loadUsers();
    dispatch(usersSlice.actions.SET_USERS(loadedUsers));
    dispatch(usersSlice.actions.SET_USERS_LOADING_STATUS(true));
  },

  loadUser:
    (userId: string | undefined): AppThunk =>
    async (dispatch) => {
      const user = await ApiService.loadUser(userId);
      dispatch(usersSlice.actions.SET_CURRENT_USER(user));
      dispatch(usersSlice.actions.SET_USER_LOADING_STATUS(true));
    },
};

export const { RESET_CURRENT_USER, RESET_USERS } = usersSlice.actions;

export default usersSlice.reducer;
