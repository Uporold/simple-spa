export const SortType = {
  DEFAULT: "default",
  BY_CITY: "byCity",
  BY_COMPANY_NAME: "byCompanyName",
} as const;

type Keys = keyof typeof SortType;
export type SortType = typeof SortType[Keys];
