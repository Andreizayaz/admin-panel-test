import { FC, ReactElement, ReactNode } from "react";

import "./Drawer.scss";

type DrawerPropsTypes = {
  children: ReactNode;
  openClasses: string;
};

export const Drawer: FC<DrawerPropsTypes> = ({
  children,
  openClasses,
}): ReactElement => {
  return (
    <div className={`drawer ${openClasses}`}>
      {children}
    </div>
  );
};
