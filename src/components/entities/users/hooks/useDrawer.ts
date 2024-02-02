import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setTransactions } from "../../transactions/store";

export const useDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const handleOpen = (b: boolean) => setIsOpen(b);

  useEffect(() => {
    if (!isOpen) {
      dispatch(setTransactions(null));
    }
  }, [isOpen]);

  return { isOpen, handleOpen };
};
