import WindowButtons from "./preview/window-buttons";
import WindowContent from "./preview/window-content";
import WindowHeader from "./preview/window-header";

export default function CodeImagePreview() {
  return (
    <div className="preview items-center py-3 px-4 flex flex-col w-full rounded-md bg-[#191919]">
      <div className="preview-box w-full mt-40">
        {/* frame  */}
        <div className="frame w-[30rem] mx-auto max-w-full bg-gradient-to-tr to-purple-600 from-blue-400 p-10 rounded-md">
          <div className="window flex flex-col bg-[#353742af] border rounded-md border-[#82738E] glass">
            <WindowHeader />

            <WindowContent />
          </div>
        </div>
      </div>
    </div>
  );
}
