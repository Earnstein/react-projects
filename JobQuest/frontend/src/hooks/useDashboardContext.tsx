import { createContext, useContext } from "react";

interface useDashBoardContext {
  user: {name: String};
  showSidebar: boolean;
  toggleSidebar: () => void;
  logout: () => void;
}

const initialValue: useDashBoardContext = {
  user: { name: "" },
  showSidebar: false,
  toggleSidebar: () => {},
  logout: () => {},
};
const DashBoardContext = createContext(initialValue);

export default DashBoardContext;

export const useDashBoardContext = () => useContext(DashBoardContext);
