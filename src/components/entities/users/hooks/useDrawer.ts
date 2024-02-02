import { useState } from "react";

export const useDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(!isOpen);

  return { isOpen, handleOpen };
};
