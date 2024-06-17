import CodeImageControls from "./code-image-controls";
import CodeImagePreview from "./code-image-preview";

export default function CodeCaptureMain() {
  return (
    <section className="flex gap-2 h-full">
      <CodeImageControls />

      <CodeImagePreview />
    </section>
  );
}
