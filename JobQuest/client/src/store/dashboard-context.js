import { createContext, useContext } from 'react';

const initialValue = {
    user: "",
    showSidebar: false,
    isDarkTheme: false,
    toggleDarkTheme: () => {},
    toggleSidebar: () => {},
    logout: () => {},
  }
const DashBoardContext = createContext(initialValue);

export default DashBoardContext;

export const useDashBoardContext = () =>  useContext(DashBoardContext);