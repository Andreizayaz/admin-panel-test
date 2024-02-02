import { FC, ReactElement } from "react";

import { AuthUser, Company } from "src/components/shared";

import {
  AUTH_DESC,
  COMPANY_NAME,
  HEADER_LOGO,
  USER_ROLE,
} from "./helpers/consts";

import mailIcon from "./icons/mail.icon.svg";

import "./Header.scss";

export const Header: FC = (): ReactElement => (
  <header className="header">
    <div className="header-items flex-j-between-a-center">
      <div className="logo-and-company flex-j-between-a-center">
        <div className="logo">{HEADER_LOGO}</div>
        <Company companyName={COMPANY_NAME} icon={mailIcon} />
      </div>
      <AuthUser authDesc={AUTH_DESC} userRole={USER_ROLE} />
    </div>
  </header>
);
