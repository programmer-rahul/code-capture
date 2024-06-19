import EditorSlice from "./slices/editor-slice";
import WindowSlice from "./slices/window-slice";

export type StoreStates = WindowSlice & EditorSlice;

export type SetState = (
  partial:
    | StoreStates
    | Partial<StoreStates>
    | ((state: StoreStates) => StoreStates | Partial<StoreStates>),
  replace?: boolean | undefined
) => void;
