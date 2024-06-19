import { applyTheme } from "@/lib/editor/themes/apply-theme";
import useStore from "@/lib/store/store";

export default function useEditorTheme() {
    
  const editorTheme = useStore((state) => state.editorTheme);
  const editorThemeColors = useStore((state) => state.editorThemeColors);
  const changeEditorThemeColors = useStore(
    (state) => state.changeEditorThemeColors
  );

  const updateEditorWindowTheme = async () => {
    const colors = await applyTheme(editorTheme);
    changeEditorThemeColors(colors);
    13;
  };

  return { updateEditorWindowTheme };
}
