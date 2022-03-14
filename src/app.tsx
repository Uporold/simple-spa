import React from "react";
import "./styles/globals.scss";
import { SortingMenu } from "./components/sorting-menu/sorting-menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UsersList } from "./pages/users-list/users-list";
import { PagePath } from "./const";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PagePath.MAIN} element={<SortingMenu />}>
          <Route index element={<UsersList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
