import React from "react";
import "./user-card.scss";
import { Link } from "react-router-dom";
import { User } from "../../api/types";
import { PagePath } from "../../const";

interface Props {
  user: User;
}

export const UserCard: React.FC<Props> = ({ user }) => {
  const { name, address, company } = user;
  return (
    <li className="user-card">
      <ul className="user-card__info">
        <li className="user-card__row">
          ФИО: <span className="span">{name}</span>
        </li>
        <li className="user-card__row">
          город: <span>{address.city}</span>
        </li>
        <li className="user-card__row">
          компания: <span>{company.name}</span>
        </li>
      </ul>
      <Link className="user-card__link" to={PagePath.USER(user.id)}>
        Подробнее
      </Link>
    </li>
  );
};
