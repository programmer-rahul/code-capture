export interface EditorThemeColors {
  "editor.background": string;
}

export default interface EditorSlice {
  editorTheme: string;
  changeEditorTheme: (theme: string) => void;

  editorLanguage: string;
  changeEditorLanguage: (language: string) => void;

  editorThemeColors: EditorThemeColors;
  changeEditorThemeColors: (themeColors: EditorThemeColors) => void;

  isEditorMounted : boolean,
  changeEditorMounted : (value : boolean) => void,
}
