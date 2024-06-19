import EditorSlice from "@/lib/types/store/slices/editor-slice";
import { SetState } from "@/lib/types/store/store";

export default function createEditorSlice(set: SetState): EditorSlice {
  return {
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

    editorThemeColors: {
      "editor.background": "",
    },
    changeEditorThemeColors: (themeColors) =>
      set(() => ({
        editorThemeColors: themeColors,
      })),

    isEditorMounted: false,
    changeEditorMounted: (value) => set(() => ({ isEditorMounted: value })),
  };
}
