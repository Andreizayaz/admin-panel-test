import { FC, ReactElement } from "react";

import "./Company.scss";

type CompanyPropsTypes = {
  companyName: string;
  icon: string;
};

export const Company: FC<CompanyPropsTypes> = ({
  companyName,
  icon,
}): ReactElement => (
  <div className="company flex-j-between-a-center">
    <div
      className="company-icon bg-image"
      style={{ backgroundImage: `url(${icon})` }}
    ></div>
    <div className="company-name">{companyName}</div>
  </div>
);
