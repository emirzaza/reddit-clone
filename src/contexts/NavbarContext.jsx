import { useDisclosure } from '@mantine/hooks';
import { createContext, useContext } from 'react';

const NavbarContext = createContext();

export const useNavbar = () => useContext(NavbarContext);

const NavbarProvider = ({ children }) => {
  const [opened, { toggle }] = useDisclosure(true);

  return (
    <NavbarContext.Provider value={{ opened, toggle }}>
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarProvider;
