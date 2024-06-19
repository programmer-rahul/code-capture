import { create } from "zustand";
import createWindowSlice from "./slices/window-slice";
import createEditorSlice from "./slices/editor-slice";
import { StoreStates } from "../types/store/store";

const useStore = create<StoreStates>()((set) => ({
  ...createWindowSlice(set),
  ...createEditorSlice(set),
}));

export default useStore;
