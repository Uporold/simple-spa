import React, { useEffect } from "react";
import "./users-list.scss";
import { UserCard } from "../../components/user-card/user-card";
import { LoaderSpinner } from "../../components/common/loader-spinner/loader-spinner";
import {
  useUsersBySort,
  useUsersLoadingStatus,
} from "../../store/user/hooks/selectors";
import { useLoadUsers } from "../../store/user/hooks/useLoadUsers";
import { useResetUsers } from "../../store/user/hooks/useResetUsers";

export const UsersList = () => {
  const loadUsers = useLoadUsers();
  const isLoaded = useUsersLoadingStatus();
  const users = useUsersBySort();
  const resetUsers = useResetUsers();

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  useEffect(() => {
    return () => {
      resetUsers();
    };
  }, [resetUsers]);

  return isLoaded ? (
    <>
      <h1 className="header">Список пользователей</h1>
      <ul className="users">
        {users.map((user) => (
          <UserCard user={user} key={user.phone} />
        ))}
      </ul>
      <p className="users__count">Найдено {users.length} пользователей</p>
    </>
  ) : (
    <LoaderSpinner />
  );
};
