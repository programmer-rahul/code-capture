"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useStore from "@/lib/store/store";

import themeList from "monaco-themes/themes/themelist.json";
import editorLanguages from "@/lib/editor/languages/editor-languages";
import useEditorTheme from "@/hooks/editor-theme";

export default function ControlOptions() {
  // hook
  const { updateEditorWindowTheme } = useEditorTheme();

  // store
  const changeEditorTheme = useStore((state) => state.changeEditorTheme);
  const changeEditorLanguage = useStore((state) => state.changeEditorLanguage);

  return (
    <div className="options space-y-4 p-2">
      <div className="language w-full flex gap-2 items-center">
        <div className="option-name w-1/3">Language</div>
        <div className="option-input w-full">
          <Select
            onValueChange={(value) => {
              changeEditorLanguage(value);
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Javascript" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {editorLanguages.map((language) => (
                  <SelectItem value={language}>{language}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="theme w-full flex gap-2 items-center">
        <div className="option-name w-1/3">Theme</div>
        <div className="option-input w-full">
          <Select
            onValueChange={(value) => {
              changeEditorTheme(value);
              updateEditorWindowTheme();
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Night Owl" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {Object.values(themeList).map((theme) => (
                  <SelectItem value={theme}>{theme}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
