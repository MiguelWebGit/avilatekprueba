import { useState } from 'react';

const useSidebar = (initialState: boolean = false): [boolean, () => void] => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return [isOpen, toggle];
};

export default useSidebar;
