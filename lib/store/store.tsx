import { create } from "zustand";

interface StoreStates {
  windowWidth: number;
  changeWindowWidth: (newWidth: number) => void;
}

const useStore = create<StoreStates>()((set) => ({
  windowWidth: 600,
  changeWindowWidth: (newWidth) =>
    set(() => ({
      windowWidth: newWidth,
    })),
}));

export default useStore;
