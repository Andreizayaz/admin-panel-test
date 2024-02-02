import { FC, ReactElement, ReactNode } from "react";

import "./Drawer.scss";

type DrawerPropsTypes = {
  children: ReactNode;
  openClasses: string;
  closeHandler: () => void;
};

export const Drawer: FC<DrawerPropsTypes> = ({
  children,
  openClasses,
  closeHandler,
}): ReactElement => {
  return (
    <div className={`drawer ${openClasses}`}>
      <button className="btn-close" onClick={closeHandler}></button>
      {children}
    </div>
  );
};
