import { create } from "zustand"

interface useDashBoardStore{
    user: String;
    showSidebar: boolean;
    toggleSidebar: () => void;
    logout: () => void;
  }
  
 export const useDashboard  =  create<useDashBoardStore>(((set) => ({
    user: "",
    showSidebar: false,
    toggleSidebar: () => set((state) => ({ showSidebar: !state.showSidebar })),
    logout: () => {
    },
  })))