import { headingType } from "src/components/shared/table/types";

export const USERS_URL = "https://test.gefara.xyz/api/v1/user/list";

export const EMAIL = "Email";
export const NAME = "Имя";
export const ROLE = "Роль";
const SUBSCRIPTION = "Подписка";
export const TOKENS = "Токены";
export const ACTIONS = "Действия";

export const headings: headingType[] = [
  {
    heading: EMAIL,
  },
  {
    heading: NAME,
  },
  {
    heading: ROLE,
  },
  {
    heading: SUBSCRIPTION,
  },
  {
    heading: TOKENS,
    classes: "sort",
  },
  {
    heading: ACTIONS,
  },
];
