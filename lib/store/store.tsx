import { create } from "zustand";

interface StoreStates {
  windowWidth: number;
  changeWindowWidth: (newWidth: number) => void;

  editorTheme: string;
  changeEditorTheme: (theme: string) => void;

  editorLanguage: string;
  changeEditorLanguage: (language: string) => void;
}

const useStore = create<StoreStates>()((set) => ({
  windowWidth: 600,
  changeWindowWidth: (newWidth) =>
    set(() => ({
      windowWidth: newWidth,
    })),

  editorTheme: "Night Owl",
  changeEditorTheme: (theme) =>
    set(() => ({
      editorTheme: theme,
    })),

  editorLanguage: "javascript",
  changeEditorLanguage: (language) =>
    set(() => ({
      editorLanguage: language,
    })),
}));

export default useStore;
