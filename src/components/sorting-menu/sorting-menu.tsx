import React from "react";
import "./sorting-menu.scss";
import { Outlet, useLocation } from "react-router-dom";
import { Button } from "../common/button/button";
import { Container } from "../common/container/container";
import { Layout } from "../common/layout/layout";
import { PagePath, SortType } from "../../const";
import { useSetSortType } from "../../store/app/hooks/useSetSortType";

export const SortingMenu = () => {
  const location = useLocation();
  const isDisabledButton = location.pathname !== PagePath.MAIN;
  const setSortType = useSetSortType();
  return (
    <Container>
      <aside className="sorting-menu">
        <p className="sorting-menu__title">Сортировка</p>
        <Button
          className="btn"
          type="button"
          content="по городу"
          disabled={isDisabledButton}
          onClick={() => {
            setSortType(SortType.BY_CITY);
          }}
        />
        <Button
          className="btn"
          type="button"
          content="по компании"
          disabled={isDisabledButton}
          onClick={() => {
            setSortType(SortType.BY_COMPANY_NAME);
          }}
        />
      </aside>
      <Layout>
        <Outlet />
      </Layout>
    </Container>
  );
};
