"use client";

import useStore from "@/lib/store/store";
import WindowContent from "./preview/window-content";
import WindowHeader from "./preview/window-header";

export default function CodeImagePreview() {
  const windowWidth = useStore((state) => state.windowWidth);

  return (
    <div className="preview items-center py-3 px-4 flex flex-col w-full rounded-md bg-[#191919]">
      <div className="preview-box w-full mt-40">
        {/* frame  */}
        <div
          className="frame mx-auto max-w-full bg-gradient-to-tr to-purple-600 from-blue-400 rounded-md border border-red-500 px-4 py-4"
          style={{
            width: windowWidth + 32,
          }}
        >
          <div
            className="window flex flex-col bg-[#353742af] border rounded-md border-[#82738E] border-yellow-600"
            style={{
              width: windowWidth,
            }}
          >
            <WindowHeader />

            <WindowContent />
          </div>
        </div>
      </div>
    </div>
  );
}
