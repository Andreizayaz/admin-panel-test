import { useEffect, useState, MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { setTransactions } from "../../transactions/store";

export const useDrawer = () => {
  const [isClose, setIsClose] = useState(true);

  const dispatch = useDispatch();

  const handleClose = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    const isHandleClick =
      (e.target as HTMLElement).className === "close-btn" ||
      (e.target as HTMLElement).className === "overlay";
    if (isHandleClick) {
      setIsClose(true);
    }
  };

  const handleOpen = () => setIsClose(false);

  useEffect(() => {
    if (isClose) {
      dispatch(setTransactions(null));
    }
  }, [isClose]);

  return { isClose, handleClose, handleOpen };
};
