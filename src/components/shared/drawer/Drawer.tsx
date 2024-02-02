import { FC, ReactElement, ReactNode } from "react";

type DrawerPropsTypes = {
  children: ReactNode;
  closeHandler: () => void;
};

export const Drawer: FC<DrawerPropsTypes> = ({
  children,
  closeHandler,
}): ReactElement => {
  return (
    <div className="drawer">
      <button className="btn-close" onClick={closeHandler}></button>
      {children}
    </div>
  );
};
