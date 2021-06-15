import { createContext, useState } from 'react';
export const NavbarStateContext = createContext();
export const NavbarStateProvider = ({ children }) => {
  const [navbarTheme, setNavbarTheme] = useState('dark');
  const [navbarRef, setNavbarRef] = useState();
  const toggleNavbarTheme = () => {
    if (navbarTheme === 'light') {
      setNavbarTheme('dark');
    } else {
      setNavbarTheme('light');
    }
  };

  const value = {
    navbarTheme,
    setNavbarTheme,
    toggleNavbarTheme,
    navbarThemeIsLight: navbarTheme === 'light',
    navbarRef,
    setNavbarRef,
  };
  return (
    <NavbarStateContext.Provider value={value}>
      {children}
    </NavbarStateContext.Provider>
  );
};
