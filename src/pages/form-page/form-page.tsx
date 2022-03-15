import React, { useEffect, useState } from "react";
import "./form-page.scss";
import { Button } from "../../components/common/button/button";
import { useParams } from "react-router-dom";
import { Form } from "../../components/form/form";
import { LoaderSpinner } from "../../components/common/loader-spinner/loader-spinner";
import {
  useUser,
  useUserLoadingStatus,
} from "../../store/user/hooks/selectors";
import { useLoadUser } from "../../store/user/hooks/useLoadUser";
import { useResetCurrentUser } from "../../store/user/hooks/useResetCurrentUser";

export const FormPage = () => {
  const { id } = useParams();
  const [isDisabled, setFormStatus] = useState(true);
  const loadUser = useLoadUser();
  const isLoaded = useUserLoadingStatus();
  const user = useUser();
  const resetCurrentUser = useResetCurrentUser();

  useEffect(() => {
    loadUser(id);
  }, [id, loadUser]);

  useEffect(() => {
    return () => {
      resetCurrentUser();
    };
  }, [resetCurrentUser]);

  const changeMode = () => {
    setFormStatus(false);
  };

  return isLoaded ? (
    <>
      <div className="form-page__header-container">
        <h1 className="header">Профиль пользователя</h1>
        <Button
          className="btn"
          type="button"
          content="Редактировать"
          onClick={changeMode}
        />
      </div>
      <Form userData={user} disabled={isDisabled} />
      <Button
        className="btn btn--submit"
        form="form"
        type="submit"
        content="Отправить"
        disabled={isDisabled}
      />
    </>
  ) : (
    <LoaderSpinner />
  );
};
