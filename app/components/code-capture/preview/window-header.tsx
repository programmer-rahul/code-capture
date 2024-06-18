import WindowButtons from "./window-buttons";

export default function WindowHeader() {
  return (
    <div className="window-header rounded-t-md  flex justify-between w-full py-3 px-4 items-center">
      <WindowButtons />

      <div className="window-title">
        <p>index.js</p>
      </div>
      <div className="w-16" />
    </div>
  );
}
