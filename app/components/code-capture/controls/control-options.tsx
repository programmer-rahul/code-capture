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
import { setTheme } from "@/lib/themes/change-theme";

import themeList from "monaco-themes/themes/themelist.json";

export default function ControlOptions() {
  const changeEditorTheme = useStore((state) => state.changeEditorTheme);

  return (
    <div className="options space-y-4 p-2">
      <div className="language w-full flex gap-2 items-center">
        <div className="option-name w-1/3">Language</div>
        <div className="option-input w-full">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Javascript" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="javascript">Javascript</SelectItem>
                <SelectItem value="typescript">Typescript</SelectItem>
                <SelectItem value="react">React</SelectItem>
                <SelectItem value="html">Html</SelectItem>
                <SelectItem value="css">Css</SelectItem>
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
              console.log("value", value);
              changeEditorTheme(value);
              setTheme(value);
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
