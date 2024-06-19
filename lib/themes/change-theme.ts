import { loader } from "@monaco-editor/react";

const setTheme = async (themeName: string) => {
  console.log(themeName);
  let themeData = await import(`monaco-themes/themes/${themeName}.json`);
  themeData = { ...themeData };

  themeName &&
    loader.init().then((monaco) => {
      if (themeName.split(" ").length > 1) {
        console.log("yes");
        themeName = themeName.split(" ")[0] + "-" + themeName.split(" ")[1];
      }
      monaco.editor.defineTheme(themeName, themeData);
      monaco.editor.setTheme(themeName);
    });

  return { ...themeData };
};

export { setTheme };
