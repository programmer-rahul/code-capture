import { applyTheme } from "@/lib/editor/themes/apply-theme";
import useStore from "@/lib/store/store";

export default function useEditorTheme() {
  
  const changeEditorThemeColors = useStore(
    (state) => state.changeEditorThemeColors
  );

  const updateEditorWindowTheme = async (themeName: string) => {
    const colors = await applyTheme(themeName);
    changeEditorThemeColors(colors);
  };

  return { updateEditorWindowTheme };
}
