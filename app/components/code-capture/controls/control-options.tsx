"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ControlOptions() {
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
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Night-Owl" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="andromeda">Andromeda</SelectItem>
                <SelectItem value="night-owl">Night-Owl</SelectItem>
                <SelectItem value="vs-code">Vs-Code</SelectItem>
                <SelectItem value="github-dark">Github-Dark</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
