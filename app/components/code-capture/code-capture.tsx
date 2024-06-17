import CodeCaptureHeader from "./code-capture-header";
import CodeCaptureMain from "./code-capture-main";

export default function CodeCapture() {
  return (
    <main className="w-screen gap-6 flex flex-col p-2 h-screen">
      <CodeCaptureHeader />

      <CodeCaptureMain />
    </main>
  );
}
