import { FormUser, User } from "../../../api/types";
import { useSelector } from "react-redux";
import { RootState } from "../../reducer";
import { createSelector } from "@reduxjs/toolkit";
import { getSortType } from "../../app/hooks/selectors";
import { getUsersBySort } from "../../../utils";

const getUsers = (state: RootState): User[] => state.users.users;
const getUser = (state: RootState): FormUser => state.users.currentUser;
const getUsersLoadingStatus = (state: RootState): boolean =>
  state.users.isUsersLoaded;
const getUserLoadingStatus = (state: RootState): boolean =>
  state.users.isUserLoaded;

export const useUsers = (): User[] => useSelector(getUsers);

export const useUsersBySort = (): User[] =>
  useSelector(
    createSelector(getUsers, getSortType, (users, sortType) =>
      getUsersBySort(users, sortType)
    )
  );

export const useUsersLoadingStatus = () => useSelector(getUsersLoadingStatus);

export const useUser = (): FormUser => useSelector(getUser);

export const useUserLoadingStatus = () => useSelector(getUserLoadingStatus);
