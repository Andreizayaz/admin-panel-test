import { useState } from "react";

export const useDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (b:boolean) => setIsOpen(b);

  return { isOpen, handleOpen };
};
