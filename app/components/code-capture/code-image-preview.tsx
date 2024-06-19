"use client";

import useStore from "@/lib/store/store";
import WindowContent from "./preview/window-content";
import WindowHeader from "./preview/window-header";
import { cn } from "@/lib/utils";
import CodeImageLoadingSkelton from "./preview/code-image-loading-skelton";

export default function CodeImagePreview() {
  const windowWidth = useStore((state) => state.windowWidth);
  const isEditorMounted = useStore((state) => state.isEditorMounted);

  return (
    <div className="preview items-center py-3 px-4 flex flex-col w-full rounded-md bg-[#191919]">
      <div className="preview-box w-full mt-40">
        {/* frame  */}
        <div
          className={cn(
            "frame mx-auto max-w-full bg-gradient-to-tr to-purple-600 from-blue-400 rounded-md px-8 py-8",
            !isEditorMounted && "hidden"
          )}
          style={{
            width: windowWidth + 8 * 4 * 2,
          }}
        >
          <div
            className="window flex flex-col border rounded-md border-[#82738E]"
            style={{
              width: windowWidth,
            }}
          >
            <WindowHeader />

            <WindowContent />
          </div>
        </div>

        {!isEditorMounted && <CodeImageLoadingSkelton />}
      </div>
    </div>
  );
}
