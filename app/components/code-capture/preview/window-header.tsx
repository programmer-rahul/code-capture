import { cn } from "@/lib/utils";
import WindowButtons from "./window-buttons";
import useStore from "@/lib/store/store";

export default function WindowHeader() {
  const editorThemeColors = useStore((state) => state.editorThemeColors);

  return (
    <div
      className="window-header rounded-t-md flex justify-between w-full py-3 px-4 items-center"
      style={{
        background: editorThemeColors["editor.background"],
      }}
    >
      <WindowButtons />

      <div className="window-title">
        <p>index.js</p>
      </div>
      <div className="w-16" />
    </div>
  );
}
