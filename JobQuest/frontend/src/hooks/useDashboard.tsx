import { create } from "zustand"

type func = () => void;

interface useDashBoardStore{
    user: String;
    showSidebar: boolean;
    toggleSidebar: () => void;
    logout: (funct: func) => void;
  }
  
 export const useDashboard  =  create<useDashBoardStore>(((set) => ({
    user: "",
    showSidebar: false,
    toggleSidebar: () => set((state) => ({ showSidebar: !state.showSidebar })),
    logout: (f) => {
      return f()
    },
  })))