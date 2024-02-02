import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setTransactions } from "../../transactions/store";

export const useDrawer = () => {
  const [isClose, setisClose] = useState(true);

  const dispatch = useDispatch();

  const handleClose = (b: boolean) => setisClose(b);

  useEffect(() => {
    if (isClose) {
      dispatch(setTransactions(null));
    }
  }, [isClose]);

  return { isClose, handleClose };
};
