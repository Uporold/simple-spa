import { SortType } from "./const";
import { User } from "./api/types";

export const getUsersBySort = (users: User[], sortType: SortType): User[] => {
  switch (sortType) {
    case SortType.BY_COMPANY_NAME:
      return users
        .slice()
        .sort((a, b) => a.company.name.localeCompare(b.company.name));
    case SortType.BY_CITY:
      return users
        .slice()
        .sort((a, b) => a.address.city.localeCompare(b.address.city));
    default:
      return users;
  }
};
