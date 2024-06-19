"use client";

import { Editor, MonacoDiffEditor } from "@monaco-editor/react";
import React from "react";
import useStore from "./store/store";
import useEditorTheme from "@/hooks/editor-theme";

export default function MonacoEditor() {
  const editorRef = React.useRef<MonacoDiffEditor>(null);

  const { updateEditorWindowTheme } = useEditorTheme();

  const windowWidth = useStore((state) => state.windowWidth);
  const changeWindowWidth = useStore((state) => state.changeWindowWidth);

  const editorTheme = useStore((state) => state.editorTheme);
  const changeEditorMounted = useStore((state) => state.changeEditorMounted);

  const editorLanguage = useStore((state) => state.editorLanguage);

  // to adjust editor width based on its content
  const controlEditorWidth = () => {
    if (editorRef.current) {
      const scrollWidth = editorRef.current.getScrollWidth();

      if (scrollWidth + 28 > windowWidth) {
        console.log("yes");
        changeWindowWidth(scrollWidth + 28);
      }
    }
  };

  return (
    <Editor
      language={editorLanguage}
      height={"100%"}
      value={`class HelloWorldApp {
        public static void main(String[] args) {
            System.out.println("Hello World!");
        }
    }`}
      theme="vs-dark"
      onMount={(editor) => {
        changeEditorMounted(true);
        editorRef.current = editor;
        updateEditorWindowTheme(editorTheme);
      }}
      onChange={() => {
        controlEditorWidth();
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
