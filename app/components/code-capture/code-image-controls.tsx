import ControlOptions from "./controls/control-options";

export default function CodeImageControls() {
  return (
    <div className="options-container bg-[#191919] w-full max-w-80 h-full rounded-md">
      <h2 className="text-2xl font-semibold text-center py-2">Options</h2>

      <ControlOptions />
    </div>
  );
}
