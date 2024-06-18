"use client";

import { Editor, MonacoDiffEditor } from "@monaco-editor/react";
import React from "react";
import useStore from "./store/store";

export default function MonacoEditor() {
  const editorRef = React.useRef<MonacoDiffEditor>(null);

  const windowWidth = useStore((state) => state.windowWidth);
  const changeWindowWidth = useStore((state) => state.changeWindowWidth);

  // Example function to log scroll width
  const logScrollWidth = () => {
    if (editorRef.current) {
      const scrollWidth = editorRef.current.getScrollWidth();

      console.log("width", windowWidth);
      console.log("Scroll width:", scrollWidth);

      if (scrollWidth + 28 > windowWidth) {
        console.log("yes");
        changeWindowWidth(scrollWidth + 28);
      }
    }
  };

  return (
    <Editor
      language="javascript"
      height={"100%"}
      value="const width = 55;"
      theme="vs-dark"
      onMount={(editor) => {
        editorRef.current = editor;
      }}
      onChange={() => {
        logScrollWidth();
      }}
      options={{
        lineNumbers: "off",
        minimap: {
          enabled: false,
        },
        fontSize: 18,
        scrollbar: {
          vertical: "hidden",
          horizontal: "hidden",
        },
      }}
    />
  );
}
