import { create } from "zustand"
interface useDashBoardStore{
    showSidebar: boolean;
    toggleSidebar: () => void;
  }
  
 export const useDashboard  =  create<useDashBoardStore>(((set) => ({
    showSidebar: false,
    toggleSidebar: () => set((state) => ({ showSidebar: !state.showSidebar }))
  })))