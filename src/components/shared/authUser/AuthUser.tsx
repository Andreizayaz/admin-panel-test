import { FC, ReactElement } from "react";

import defaultIcon from "./icons/defaultUser.icon.svg";

import "./AuthUser.scss";

type AuthUserPropsTypes = {
  authDesc: string;
  userRole: string;
  avatar?: string;
};

export const AuthUser: FC<AuthUserPropsTypes> = ({
  authDesc,
  userRole,
  avatar,
}): ReactElement => (
  <div className="auth-user flex-j-between-a-center">
    <div
      className="avatar bg-image"
      style={{ backgroundImage: `url(${avatar ?? defaultIcon})` }}
    ></div>
    <div className="desc flex-column ">
      <p className="auth-desc">{authDesc}</p>
      <p className="user-role">{userRole}</p>
    </div>
  </div>
);
